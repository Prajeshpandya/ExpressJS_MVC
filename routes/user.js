import express from "express";
import {
  createUser,
  getAlluser,
  getUserById,
  specialFunc,
} from "../controllers/user.js";

const router = express.Router();

// prefix route is -> /users

router.get("/all", getAlluser);

router.post("/new", createUser);

router.get("/userid/special", specialFunc);

router.get("/userid/:id", getUserById);

export default router;
