"use server";

import { z } from "zod";

const contactSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters").max(50, "First name is too long"),
  lastName: z.string().min(2, "Last name must be at least 2 characters").max(50, "Last name is too long"),
  email: z.string().email("Please provide a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000, "Message is too long")
});

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
  // In a real application, you would save to a DB or send an email here
  console.log("Validated Form Data:", validatedFields.data);

  return {
    success: true,
    message: "We'll be in touch soon!",
  };
}
