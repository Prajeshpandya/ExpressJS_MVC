import express from "express";
export const app = express();
import {config} from "dotenv"
//to use route that we made in user 

config({
    path:"./data/config.env"
})

//use middleWare for getData from postman .
app.use(express.json());





