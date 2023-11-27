import { ReactUser } from "../models/user.model.js";

const saveUser = async (req, res) => {
    console.table(req.body);
    try {
        await ReactUser.create(req.body);
        res.status(200).json({ "msg": "User created Successfully" });
    } catch (error) {
        res.status(200).json({ "msg": error });
    }

}

const fetchAllUsers = async (req, res) => {
    const userList = await ReactUser.find().select(
        "-password"
    );

    res.status(200).json({ "data": { userList } });
}

export { saveUser, fetchAllUsers }