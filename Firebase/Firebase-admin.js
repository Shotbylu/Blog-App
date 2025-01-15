const admin = require("firebase-admin");

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL || "firebase-adminsdk@blog-app-5bb5d.iam.gserviceaccount.com",
      privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n") || "-----BEGIN PRIVATE KEY-----\nYourPrivateKeyHere\n-----END PRIVATE KEY-----",
      projectId: process.env.FIREBASE_PROJECT_ID || "blog-app-5bb5d",
    }),
    databaseURL: process.env.FIREBASE_DATABASE_URL || "https://blog-app-5bb5d.firebaseio.com",
  });
}

module.exports = admin.firestore();
