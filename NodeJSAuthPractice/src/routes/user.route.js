import { saveUser, fetchAllUsers } from "../controllers/user.controller.js";
import { Router } from "express";


const userRouter = Router();

userRouter.route("/users").get(fetchAllUsers);
userRouter.route("/users").post(saveUser);

export { userRouter };