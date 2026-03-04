import express from "express";
import { createUser, getUserProfile, getUsers, getUserById, updateUser, deleteUser } from "../controllers/userController.js";

const router = express.Router();
const app = express();

router.get("/", getUsers)
router.post("/", createUser)
router.get("/profile", getUserProfile)
router.get("/:id", getUserById)

router.put("/:id", updateUser)
router.delete("/:id", deleteUser)

export default router;