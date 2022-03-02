import {Request, Response} from "express";
import {User} from "../types/User";
import {userRoutes} from "../routes/userRoutes";
import {LoginQueryParams} from "../types/LoginQueryParams";

export const getUsers = (req: Request, res: Response) => {
    const user: User = {
        id: 1,
        password: "tony123",
        //ctrl+space za ostavashtite parametri
        username: "tony"
    }
    res.send(user)
}

export const login = (req: Request, res: Response) => {
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
}
