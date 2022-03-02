import express = require("express")
import {Application, Request, Response} from "express";
import {User} from "./types/User";
import {LoginQueryParams} from "./types/LoginQueryParams"; //importirane na type ot drug file
import {userRoutes} from "./routes/userRoutes";

const app: Application = express();
app.use("/api/", userRoutes);

app.listen (8081, () => {
    console.log("Connected")
})