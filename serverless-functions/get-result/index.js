const path = require("path");
const Firestore = require("@google-cloud/firestore");

const serviceKey = path.resolve("service-key.json");
const db = new Firestore({ keyFilename: serviceKey });
// const db = new Firestore();

module.exports.function = async (req, res) => {
  try {
    res.set("Access-Control-Allow-Origin", "http://localhost:3000");

    if (req.method !== "GET") throw "Method not allowed";

    const testId = req.query.testId;
    console.log(testId);
    const testRef = await db.collection("tests").doc(testId);

    const doc = await testRef.get();
    const data = doc.data();

    await testRef.set({ userResponse: [] }, { merge: true });

    res.status(200).send(data);
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: "Internal Server Error" });
  }
};
