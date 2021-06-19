// const path = require("path");
const Firestore = require("@google-cloud/firestore");

// const serviceKey = path.resolve("serverless-functions", "service-key.json");
// const db = new Firestore({ keyFilename: serviceKey });
const db = new Firestore();

module.exports.function = async (req, res) => {
  try {
    res.set("Access-Control-Allow-Origin", "*");

    if (req.method === "OPTIONS") {
      res.set("Access-Control-Allow-Methods", "POST");
      res.set("Access-Control-Allow-Headers", "Content-Type");
      res.set("Access-Control-Max-Age", "86400");
      res.status(204).send("");
      return;
    }
    if (req.method !== "POST") throw "Method not allowed";

    const testId = req.body.testId;
    if (testId == undefined) throw "Bad request. Data missing";

    // Find user by email
    const testRef = db.collection("tests").doc(testId);
    await testRef.update({
      userResponse: Firestore.FieldValue.arrayUnion(req.body.response),
    });

    res.status(200).send({ message: "Result added successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: "Unknown Error occured" });
  }
};
