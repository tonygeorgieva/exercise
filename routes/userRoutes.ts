import {Request, Response, Router} from "express";
import {User} from "../types/User";
import {LoginQueryParams} from "../types/LoginQueryParams";
import {getUsers, login} from "../controllers/userController";

export const userRoutes = Router();

userRoutes.get("/", (req: Request, res: Response)=> {
    res.send( {
        status:200,
        message: "Success"
    })
})

userRoutes.get("/user", getUsers)
//requestva username & pass za login
userRoutes.get("/login", login)
