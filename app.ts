import express = require("express")
import {Application, Request, Response} from "express";
import {User} from "./types/User";
import {LoginQueryParams} from "./types/LoginQueryParams"; //importirane na type ot drug file


const app: Application = express();

app.get("/", (req: Request, res: Response)=> {
    res.send( {
        status:200,
        message: "Success"
    })
})

app.get("/user", (req: Request, res: Response) => {
    const user: User = {
        id: 1,
        password: "tony123",
        //ctrl+space za ostavashtite parametri
        username: "tony"
    }
    res.send(user)
})
//requestva username & pass za login
app.get("/login", (req: Request, res: Response) => {
    const queryParams: LoginQueryParams = req.query;
    if (!queryParams.username || !queryParams.password) {
        res.send( {
            status: 400,
            message: "Username or password has not been passed"
        })
    } //! pred neshto e za otricanie
    res.send({
        status:200,
        message: "Logged in"
    })
})


app.listen (8081, () => {
    console.log("Connected")
})