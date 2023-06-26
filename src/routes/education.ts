import { Router } from "express";
import {
  createEducation,
  deleteEducation,
  getAllEducation,
  getEducation,
  getUsersByEducation,
  updateEducation,
} from "../controllers";
import { roleChecker, sessionMiddleware } from "../middlewares";

const router = Router();

router.get("/", getAllEducation);
router.get("/:id", getEducation);
router.get(
  "/:id/users",
  sessionMiddleware,
  roleChecker(["admin"]),
  getUsersByEducation
);
router.post("/", sessionMiddleware, roleChecker(["admin"]), createEducation);
router.put("/:id", sessionMiddleware, roleChecker(["admin"]), updateEducation);
router.delete(
  "/:id",
  sessionMiddleware,
  roleChecker(["admin"]),
  deleteEducation
);

export { router };
