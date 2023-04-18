import mongoose from "mongoose";
import express from 'express';
import cors from 'cors';
import BookclubsController
  from "./controllers/bookclubs/bookclubs-controller.js";
import UsersController
  from "./controllers/bookclubs/bookclubs-controller.js";

//const CONNECTION_STRING = process.env.DB_CONNECTION_STRING;
const CONNECTION_STRING = 'mongodb+srv://dbUser:kqogPRmw9YUw4AEP@cluster0.yiumt4r.mongodb.net/BookClub?retryWrites=true&w=majority';
await mongoose.connect(CONNECTION_STRING);

const app = express();
app.use(cors());
app.use(express.json());

BookclubsController(app);
UsersController(app);

app.listen(process.env.PORT || 4000);