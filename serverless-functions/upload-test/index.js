// const path = require("path");
const { Storage } = require("@google-cloud/storage");
const Firestore = require("@google-cloud/firestore");

// const serviceKey = path.resolve("service-key.json");

// const db = new Firestore({ keyFilename: serviceKey });
const db = new Firestore();
const testDb = db.collection("tests");

// const storage = new Storage({ keyFilename: serviceKey });
const storage = new Storage();
const bucket = storage.bucket("mcq-test");

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
      const buff = new Buffer.from(req.headers.authorization, "base64");
      const authKey = buff.toString("utf8");
      if (authKey != process.env.ADMIN_SECRET_KEY) throw "Unauthorised request";
    } else throw "Unauthorised request";

    const testName = req.body.examInfo.testName
      .toLowerCase()
      .replace(/\s/g, "-");

    const options = {
      resumable: true,
      validation: "crc32c",
      metadata: {
        contentType: "application/json",
        cacheControl: "max-age=604800",
      },
    };

    const file = bucket.file(`${testName}.json`);
    const contents = JSON.stringify(req.body);
    await file.save(contents, options);

    await testDb.doc(testName).set({
      ...req.body.examInfo,
      userResponse: [],
    });

    res.status(201).send({ message: "Uploaded successfully", id: testName });

    // bucket.upload("logo.png", options, function (err, file) {
    //   if (err) throw "Could not upload";
    //   // `file` is an instance of a File object that refers to your new file.
    //   res
    //     .status(200)
    //     .send({ message: "Uploaded successfully", fileName: file.name });
    // });
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: "Unknown Error occured" });
  }
};
