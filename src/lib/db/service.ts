/* eslint-disable @typescript-eslint/no-unsafe-function-type */
import { getFirestore, getDocs, collection, addDoc } from "firebase/firestore";
import { app } from "./init";

const firestore = getFirestore(app);
export async function retrieveData(collectionName: string) {
  const snapshot = await getDocs(collection(firestore, collectionName));

  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return data;
}

export async function sendMessage(
  messageData: {
    name: string;
    email: string;
    message: string;
  },
  callback: Function
) {
  const docRef = await addDoc(collection(firestore, "messages"), messageData)
    .then(() => {
      callback({ status: true, message: "Message sent successfully" });
    })
    .catch((err) => {
      callback({ status: false, message: err.message });
    });

  return docRef;
}
