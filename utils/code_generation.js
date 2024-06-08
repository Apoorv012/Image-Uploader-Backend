import Randomstring from "randomstring";
import client from "../config/db.config.js";

function getRandomCode() {
  const code = Randomstring.generate({
    length: 6,
    charset: "alphabetic",
  });

  return code;
}

async function codeExistsInDatabase(code) {
  const db = client.db("uploads");
  const collection = db.collection("images");

  const query = { code: code };

  const result = await collection.findOne(query);

  console.log(result)

  if (result) {
    return true;
  } else {
    return false;
  }
}

async function getUniqueCodeFromMongoDB() {
  let code = getRandomCode();
  // Check if the code is unique in the database
  if (await codeExistsInDatabase(code)) {
    // If not, generate a new code
    console.log("code", code);
    return getUniqueCodeFromMongoDB();
  }

  return code;
}

export { getRandomCode, getUniqueCodeFromMongoDB, codeExistsInDatabase };