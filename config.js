import dotenv from 'dotenv';
import assert from 'assert';

dotenv.config();

const {
  PORT,
  HOST,
  HOST_URL,
  API_KEY,
  AUTH_DOMAIN,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSAGING_SENDER_ID,
  APP_ID,
} = process.env;

assert(PORT, 'Port is required');
assert(HOST, 'Host is required');

export default {
  port: PORT,
  host: HOST,
  hostUrl: HOST_URL,
  firebaseConfig: {
    apiKey: "AIzaSyAqmXpCxb2-BHnZmEPXGeWA3okT_i1ItSI",
    authDomain: "graduation2-fb874.firebaseapp.com",
    projectId: "graduation2-fb874",
    storageBucket: "graduation2-fb874.appspot.com",
    messagingSenderId: "33103850184",
    appId: "1:33103850184:web:5de451f9bd3b9f85c9d3fd",
    measurementId: "G-J126KFNYPQ"
  },
};