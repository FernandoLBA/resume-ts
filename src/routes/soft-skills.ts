import { Router } from "express";
import {
  createSoftSkill,
  deleteSoftSkill,
  getAllSoftSkills,
  getSoftSkill,
  getUsersBySoftSkill,
  updateSoftSkill,
} from "../controllers";
import { roleChecker, sessionMiddleware } from "../middlewares";

const router = Router();

router.get("/", getAllSoftSkills);
router.get("/:id", getSoftSkill);
router.get(
  "/:id/users",
  sessionMiddleware,
  roleChecker(["admin"]),
  getUsersBySoftSkill
);
router.post("/", sessionMiddleware, roleChecker(["admin"]), createSoftSkill);
router.put("/:id", sessionMiddleware, roleChecker(["admin"]), updateSoftSkill);
router.delete(
  "/:id",
  sessionMiddleware,
  roleChecker(["admin"]),
  deleteSoftSkill
);

export { router };
