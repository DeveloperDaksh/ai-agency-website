import { initializeApp, getApps, getApp, FirebaseApp } from "firebase/app";
import { getFirestore, Firestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Debug: Check if config is loaded
const missingKeys = Object.entries(firebaseConfig)
  .filter(([_, value]) => !value)
  .map(([key]) => key);

if (missingKeys.length > 0) {
  const envType = typeof window !== "undefined" ? "Client" : "Server";
  console.warn(`⚠️ [${envType}] Firebase Config is missing keys:`, missingKeys);
}

function getFirebase() {
  let app: FirebaseApp;
  let db: Firestore;

  const isServer = typeof window === "undefined";
  const envType = isServer ? "Server" : "Client";

  try {
    // Check if we have the minimum requirements
    if (!firebaseConfig.apiKey || !firebaseConfig.projectId) {
      const errorMsg = `Firebase Config is missing required fields (apiKey, projectId). This usually means environment variables are not set in the production environment.`;
      console.error(`❌ [${envType}] ${errorMsg}`);
      return { app: null as any, db: null as any, error: errorMsg };
    }

    app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
    db = getFirestore(app);
    return { app, db, error: null };
  } catch (error) {
    const errorMsg = error instanceof Error ? error.message : String(error);
    console.error(`❌ [${envType}] Firebase initialization failed:`, error);
    return { app: null as any, db: null as any, error: errorMsg };
  }
}

const { app, db, error: initError } = getFirebase();

export { app, db, initError };
