import firebase from '../firebase.js';
import user from '../Models/userModel.js';
import {
  getFirestore,
  collection,
  addDoc
} from 'firebase/firestore';

const db = getFirestore(firebase);

export const createUser = async (req, res, next) => {
  try {
    const {id,name,password} = req.body;
    await addDoc(collection(db, 'user'), {id,name,password});
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