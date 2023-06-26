import { Router } from "express";
import { loginUser, registerUser } from "../controllers";

const router = Router();

// acá colocamos como middleWare el controller;
router.post("/register", registerUser);
router.post("/login", loginUser);

export { router };
