import multer from "multer";
import { fileStorage, fileFilter } from "../utils";

export const storageMiddleware = multer({ storage: fileStorage, fileFilter });
