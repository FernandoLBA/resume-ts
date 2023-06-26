import { Router } from "express";
import {
  createRole,
  deleteRole,
  getRole,
  getRoles,
  getUsersByRole,
  updateRole,
} from "../controllers";
import { roleChecker, sessionMiddleware } from "../middlewares";
// import { secretMiddleware } from "../middlewares";

const router = Router();

// acá colocamos como middleWare el controller;
router.get("/", sessionMiddleware, getRoles);
router.get("/:id", sessionMiddleware, getRole);
router.get(
  "/:id/users",
  sessionMiddleware,
  roleChecker(["admin"]),
  getUsersByRole
);
router.post("/", sessionMiddleware, roleChecker(["admin"]), createRole);
router.put("/:id", sessionMiddleware, roleChecker(["admin"]), updateRole);
router.delete("/:id", sessionMiddleware, roleChecker(["admin"]), deleteRole);

export { router };
