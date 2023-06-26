import { Router } from "express";
import {
  createProject,
  deleteProject,
  getAllProject,
  getProject,
  getEnterprisesByProject,
  updateProject,
} from "../controllers";
import { roleChecker, sessionMiddleware } from "../middlewares";

const router = Router();

router.get("/", getAllProject);
router.get("/:id", getProject);
router.get(
  "/:id/enterprises",
  sessionMiddleware,
  roleChecker(["admin"]),
  getEnterprisesByProject
);
router.post("/", sessionMiddleware, roleChecker(["admin"]), createProject);
router.put("/:id", sessionMiddleware, roleChecker(["admin"]), updateProject);
router.delete(
  "/:id",
  sessionMiddleware,
  roleChecker(["admin"]),
  deleteProject
);

export { router };
