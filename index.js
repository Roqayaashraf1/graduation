import express from 'express';
import cors from 'cors';
import firebase from './firebase.js';
import config from './config.js';
import userRoute from './Route/userRoute.js';
import morgan from 'morgan';
import helmet from 'helmet';
import bodyParser from 'body-parser';
const app = express();

app.use(cors());

// Middleware to parse incoming JSON requests with a limit of 2mb
app.use(bodyParser.json({ limit: "2mb" }));

// Middleware to parse incoming URL-encoded data with extended mode so it can accept files
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware to parse incoming JSON requests with a specific content type and disable inflation
app.use(bodyParser.json({ type: "application/*+json", inflate: false }));

// Middleware to enhance security by setting various HTTP headers
app.use(helmet());

// Middleware for logging HTTP requests using Morgan middleware with a custom format only for logging to check if the request is sent correctly
app.use(
  morgan(
    ':method :url :status :res[content-length] - :response-time ms'
  )
);

app.use(express.json());

app.use('/api', userRoute);

// endpoint to catch any an handeled request and to ensure that the back is working
// this is used to respond 404 usually but iaam using it to check if working 
app.use((req, res, next) => {
  res.status(200).send("working");
});

app.listen(config.port, () =>
  console.log(`Server is live @ ${config.hostUrl}`),
);