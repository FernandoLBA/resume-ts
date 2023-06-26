import { Router } from "express";
import {
  getAllHobbies,
  getHobbie,
  getUsersByHobbie,
  createHobbie,
  deleteHobbie,
  updateHobbie,
} from "../controllers";
import { roleChecker, sessionMiddleware } from "../middlewares";

const router = Router();

router.get("/", getAllHobbies);
router.get("/:id", getHobbie);
router.get("/:id/users", sessionMiddleware, roleChecker(["admin"]), getUsersByHobbie);
router.post("/", sessionMiddleware, roleChecker(["admin"]), createHobbie);
router.put("/:id", sessionMiddleware, roleChecker(["admin"]), updateHobbie);
router.delete(
  "/:id",
  sessionMiddleware,
  roleChecker(["admin"]),
  deleteHobbie
);

export { router };
