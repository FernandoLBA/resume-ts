"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const controllers_1 = require("../controllers");
const middlewares_1 = require("../middlewares");
const router = (0, express_1.Router)();
exports.router = router;
router.get("/", controllers_1.getAllProject);
router.get("/:id", controllers_1.getProject);
router.get("/:id/enterprises", middlewares_1.sessionMiddleware, (0, middlewares_1.roleChecker)(["admin"]), controllers_1.getEnterprisesByProject);
router.post("/", middlewares_1.sessionMiddleware, (0, middlewares_1.roleChecker)(["admin"]), controllers_1.createProject);
router.put("/:id", middlewares_1.sessionMiddleware, (0, middlewares_1.roleChecker)(["admin"]), controllers_1.updateProject);
router.delete("/:id", middlewares_1.sessionMiddleware, (0, middlewares_1.roleChecker)(["admin"]), controllers_1.deleteProject);
