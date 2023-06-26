import { Router } from "express";
import {
  createTechnology,
  deleteTechnology,
  getAllTechnologies,
  getTechnology,
  getUsersByTechnology,
  updateTechnology,
} from "../controllers";
import { roleChecker, sessionMiddleware } from "../middlewares";

const router = Router();

router.get("/", getAllTechnologies);
router.get("/:id", getTechnology);
router.get(
  "/:id/users",
  sessionMiddleware,
  roleChecker(["admin"]),
  getUsersByTechnology
);
router.post("/", sessionMiddleware, roleChecker(["admin"]), createTechnology);
router.put("/:id", sessionMiddleware, roleChecker(["admin"]), updateTechnology);
router.delete(
  "/:id",
  sessionMiddleware,
  roleChecker(["admin"]),
  deleteTechnology
);

export { router };
