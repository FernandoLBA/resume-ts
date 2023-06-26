import { Router } from "express";
import {
  createStorage,
  deleteStorage,
  getAllStorage,
  getStorage,
  getProjectByStorage,
  updateStorage,
} from "../controllers";
import {
  roleChecker,
  sessionMiddleware,
  storageMiddleware,
} from "../middlewares";

const router = Router();

router.get("/", getAllStorage);
router.get("/:id", getStorage);
router.get(
  "/:id/projects",
  sessionMiddleware,
  roleChecker(["admin"]),
  getProjectByStorage
);
router.post(
  "/",
  sessionMiddleware,
  roleChecker(["admin"]),
  storageMiddleware.single("myFile"),
  createStorage
);
router.put(
  "/:id",
  sessionMiddleware,
  roleChecker(["admin"]),
  storageMiddleware.single("myFile"),
  updateStorage
);
router.delete(
  "/:id",
  sessionMiddleware,
  roleChecker(["admin"]),
  storageMiddleware.single("myFile"),
  deleteStorage
);

export { router };
