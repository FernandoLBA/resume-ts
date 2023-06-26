import { Request } from "express";
import multer, { FileFilterCallback } from "multer";

type DestinationCallback = (error: Error | null, destination: string) => void;
type FilenameCallback = (error: Error | null, filename: string) => void;

export const fileStorage = multer.diskStorage({
  destination: (
    req: Request,
    file: Express.Multer.File,
    cb: DestinationCallback
  ) => {
    const pathStorage = `${__dirname}/../storage`;

    cb(null, pathStorage);
  },
  filename: (req: Request, file: Express.Multer.File, cb: FilenameCallback) => {
    const ext = file.originalname.split(".").pop();

    const fileName = `file-${Date.now()}.${ext}`;

    cb(null, fileName);
  },
});

export const fileFilter = (
  req: Request,
  file: Express.Multer.File,
  cb: FileFilterCallback
) => {
  if (
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpeg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};
