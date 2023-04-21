import mongoose from "mongoose";
import express from 'express';
import session from "express-session";
import cors from 'cors';
import BookclubsController
  from "./controllers/bookclubs/bookclubs-controller.js";
import UsersController
  from "./controllers/users/users-controller.js";

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/BookClub';
await mongoose.connect('mongodb+srv://dbUser:kqogPRmw9YUw4AEP@cluster0.yiumt4r.mongodb.net/BookClub?retryWrites=true&w=majority');
console.log('connected');

const app = express();
app.use(
    session({
      secret: "any string",
      resave: false,
      saveUninitialized: true,
    })
);
app.use(
    cors({
      credentials: true,
      origin: "http://localhost:3000",
    })
);
app.use(express.json());

BookclubsController(app);
UsersController(app);

app.listen(process.env.PORT || 4000);