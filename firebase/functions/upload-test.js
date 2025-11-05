const admin = require('firebase-admin');
const { defineString } = require('firebase-functions/params');

// Initialize Firebase Admin if not already initialized
if (!admin.apps.length) {
  admin.initializeApp();
}

// Define some parameters
const adminSecretKey = defineString('ADMIN_SECRET_KEY');

const db = admin.firestore();
const testDb = db.collection("tests");
const bucket = admin.storage().bucket();

module.exports.function = async (req, res) => {
  try {
    res.set("Access-Control-Allow-Origin", "*");

    if (req.method === "OPTIONS") {
      res.set("Access-Control-Allow-Methods", "POST");
      res.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
      res.set("Access-Control-Max-Age", "86400");
      res.status(204).send("");
      return;
    }
    if (req.method !== "POST") throw "Method not allowed";

    if (req.headers.authorization) {
      const adminSecretKeyValue = process.env.ADMIN_SECRET_KEY || adminSecretKey.value();
      const buff = new Buffer.from(req.headers.authorization, "base64");
      const authKey = buff.toString("utf8");
      if (authKey != adminSecretKeyValue) {
        throw "Unauthorised request";
      }
    } else {
      throw "Unauthorised request";
    }

    const testName = req.body.examInfo.testName
      .toLowerCase()
      .replace(/\s/g, "-");

    const file = bucket.file(`${testName}.json`);
    const contents = JSON.stringify(req.body);

    // Upload file to Firebase Storage
    await file.save(contents, {
      contentType: "application/json",
      metadata: {
        cacheControl: "max-age=604800"
      }
    });

    // Save to Firestore
    await testDb.doc(testName).set({
      ...req.body.examInfo,
      userResponse: [],
    });

    res.status(201).send({ message: "Uploaded successfully", id: testName });

  } catch (err) {
    console.error(err);
    res.status(500).send({ error: "Unknown Error occured" });
  }
};
