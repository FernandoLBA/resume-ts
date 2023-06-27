import { Router } from "express";
import { deleteUser, getUser, getUsers, updateUser } from "../controllers";
import { roleChecker, sessionMiddleware } from "../middlewares";

const router = Router();

// acá colocamos como middleWare el controller;
router.get("/", sessionMiddleware, roleChecker(["admin"]), getUsers);
router.get("/:id", sessionMiddleware, roleChecker(["admin"]), getUser);
router.put("/:id", sessionMiddleware, roleChecker(["admin"]), updateUser);
router.delete("/:id", sessionMiddleware, roleChecker(["admin"]), deleteUser);

export { router };
