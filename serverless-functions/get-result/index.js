// const path = require("path");
const Firestore = require("@google-cloud/firestore");

// const serviceKey = path.resolve("service-key.json");
// const db = new Firestore({ keyFilename: serviceKey });
const db = new Firestore();

module.exports.function = async (req, res) => {
  try {
    res.set("Access-Control-Allow-Origin", "*");
    console.log("hello");

    if (req.method === "OPTIONS") {
      res.set("Access-Control-Allow-Methods", "POST");
      res.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
      res.set("Access-Control-Max-Age", "86400");
      res.status(204).send("");
      return;
    }
    if (req.method !== "POST") throw "Method not allowed";

    if (req.headers.authorization) {
      const buff = new Buffer.from(req.headers.authorization, "base64");
      const authKey = buff.toString("utf8");
      if (authKey != process.env.ADMIN_SECRET_KEY) throw "Unauthorised request";
    } else throw "Unauthorised request";

    const testId = req.body.testId;
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
