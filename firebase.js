import { initializeApp } from 'firebase/app';
import config from './config.js';
import admin from 'firebase-admin';
import serviceAccount from './serviceAccountKey.json' assert { type: 'json' };
const firebaseConfig = {
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://graduation2-fb874-default-rtdb.firebaseio.com"
};

const firebase = initializeApp(config.firebaseConfig);

export default firebase;