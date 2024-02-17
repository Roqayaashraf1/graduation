import firebase from '../firebase.js';
import user from '../Models/userModel.js';
import {
  getFirestore,
  collection,
  addDoc
} from 'firebase/firestore';
///////////////////////////// IMPORTANT/////////////////////////////////

// never foget to update the rules to accept your request 
// u may face this error if u forgot
// @firebase/firestore: Firestore (10.8.0): GrpcConnection RPC 'Write' stream 0x21e457e7 error. Code: 7 Message: 7 PERMISSION_DENIED: Missing or insufficient permissions.
const db = getFirestore(firebase);

export const createUser = async (req, res, next) => {
  try {
    const { id, name, password } = req.body;
    await addDoc(collection(db, 'user'), { id, name, password });
    res.status(200).send('user created successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};
/*export const deleteUser = async (req, res, next) => {
  try {
    const gloveID = req.params.id;
    await deleteDoc(doc(db, 'gloveuser', gloveID));
    res.status(200).send('user deleted successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const updateUser = async (req, res, next) => {
  try {
    const gloveID = req.params.id;
    const data = req.body;
    const user = doc(db, 'gloveuser', gloveID);
    await updateDoc(user, data);
    res.status(200).send('user updated successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};*/