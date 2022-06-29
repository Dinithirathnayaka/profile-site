import { set, ref } from "firebase/database";
import { db } from "../utils/firtebase";
import { v4 as uuidv4 } from "uuid";

function addform(contactobj) {
  const pid = uuidv4();
  return new Promise(async (resolve, reject) => {
    await set(ref(db, `contact/${pid}`), contactobj)
      .then(() => {
        resolve("message_added");
      })
      .catch((err) => {
        reject(err.code);
      });
  });
}

export default addform;
