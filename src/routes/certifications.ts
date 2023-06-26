import { Router } from "express";
import {
  createCertificate,
  deleteCertificate,
  getAllCertifications,
  getCertificate,
  getUsersByCertificate,
  updateCertificate,
} from "../controllers";
import { roleChecker, sessionMiddleware } from "../middlewares";

const router = Router();

router.get("/", getAllCertifications );
router.get("/:id", getCertificate);
router.get("/:id/users", getUsersByCertificate);
router.post(
  "/",
  sessionMiddleware,
  roleChecker(["admin"]),
  createCertificate
);
router.put(
  "/:id",
  sessionMiddleware,
  roleChecker(["admin"]),
  updateCertificate
);
router.delete(
  "/:id",
  sessionMiddleware,
  roleChecker(["admin"]),
  deleteCertificate
);

export { router };

