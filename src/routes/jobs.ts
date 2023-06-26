import { Router } from "express";
import {
  createJob,
  deleteJob,
  getAllJobs,
  getJob,
  getUsersByJob,
  updateJob,
} from "../controllers";
import { roleChecker, sessionMiddleware } from "../middlewares";

const router = Router();

router.get("/", getAllJobs);
router.get("/:id", getJob);
router.get(
  "/:id/users",
  sessionMiddleware,
  roleChecker(["admin"]),
  getUsersByJob
);
router.post("/", sessionMiddleware, roleChecker(["admin"]), createJob);
router.put("/:id", sessionMiddleware, roleChecker(["admin"]), updateJob);
router.delete(
  "/:id",
  sessionMiddleware,
  roleChecker(["admin"]),
  deleteJob
);

export { router };
