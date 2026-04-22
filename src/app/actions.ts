"use server";

import { z } from "zod";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const contactSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters").max(50, "First name is too long"),
  lastName: z.string().min(2, "Last name must be at least 2 characters").max(50, "Last name is too long"),
  email: z.string().email("Please provide a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000, "Message is too long")
});

export type MessageState = {
  success: boolean;
  message?: string;
  errors?: Record<string, string[]>;
};

export async function subscribeToNewsletter(prevState: MessageState, formData: FormData): Promise<MessageState> {
  const email = formData.get("email") as string;

  if (!email || !z.string().email().safeParse(email).success) {
    return {
      success: false,
      message: "Please provide a valid email address.",
    };
  }

  try {
    if (!db) {
      console.error("❌ Firestore 'db' is not initialized in server action.");
      return {
        success: false,
        message: "Database initialization failed. Please try again later.",
      };
    }

    console.log("Adding newsletter subscriber:", email);
    await addDoc(collection(db, "newsletter_subscribers"), {
      email,
      timestamp: serverTimestamp(),
      source: "lead_magnet_v2"
    });
    
    return {
      success: true,
      message: "Success! Check your inbox for the blueprint.",
    };
  } catch (err) {
    console.error("❌ Error subscribing to newsletter:", err);
    return {
      success: false,
      message: "Something went wrong. Please try again.",
    };
  }
}

export type ContactState = {
  success: boolean;
  errors?: {
    firstName?: string[];
    lastName?: string[];
    email?: string[];
    message?: string[];
  };
  message?: string;
};

export async function submitContact(prevState: ContactState, formData: FormData): Promise<ContactState> {
  // Simulate network delay for UX
  await new Promise(resolve => setTimeout(resolve, 1500));

  const validatedFields = contactSchema.safeParse({
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Please fix the errors in the form.",
    };
  }

  // Handle successful submission
  try {
    if (!db) {
      console.error("❌ Firestore 'db' is not initialized in server action.");
      return {
        success: false,
        message: "Server error: Database not initialized. Please try again later.",
      };
    }

    console.log("Saving contact submission to Firestore...");
    await addDoc(collection(db, "contact_submissions"), {
      ...validatedFields.data,
      timestamp: serverTimestamp(),
      source: "contact_form"
    });
    console.log("✅ Contact submission saved to Firestore successfully");
  } catch (err) {
    console.error("❌ Error saving contact submission:", err);
    const errorMessage = err instanceof Error ? err.message : "Internal error";
    return {
      success: false,
      message: `Failed to save message: ${errorMessage}. Please try again.`,
    };
  }

  return {
    success: true,
    message: "We'll be in touch soon!",
  };
}
