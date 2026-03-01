import { Router } from "express";
import { createUser, getUsers, updateUser, deleteUser } from "../controller/userController";

const router = Router();

router.post("/create", createUser);
router.get("/get", getUsers);
router.put("/update/:id", updateUser);
router.delete("/delete/:id", deleteUser);

export default router;