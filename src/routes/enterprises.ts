import { Router } from "express";
import {
  createEnterprise,
  deleteEnterprise,
  getAllEnterprises,
  getEnterprise,
  getUsersByEnterprise,
  updateEnterprise,
} from "../controllers";
import { roleChecker, sessionMiddleware } from "../middlewares";

const router = Router();

router.get("/", getAllEnterprises);
router.get("/:id", getEnterprise);
router.get(
  "/:id/users",
  sessionMiddleware,
  roleChecker(["admin"]),
  getUsersByEnterprise
);
router.post("/", sessionMiddleware, roleChecker(["admin"]), createEnterprise);
router.put("/:id", sessionMiddleware, roleChecker(["admin"]), updateEnterprise);
router.delete(
  "/:id",
  sessionMiddleware,
  roleChecker(["admin"]),
  deleteEnterprise
);

export { router };
