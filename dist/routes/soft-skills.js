"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const controllers_1 = require("../controllers");
const middlewares_1 = require("../middlewares");
const router = (0, express_1.Router)();
exports.router = router;
router.get("/", controllers_1.getAllSoftSkills);
router.get("/:id", controllers_1.getSoftSkill);
router.get("/:id/users", middlewares_1.sessionMiddleware, (0, middlewares_1.roleChecker)(["admin"]), controllers_1.getUsersBySoftSkill);
router.post("/", middlewares_1.sessionMiddleware, (0, middlewares_1.roleChecker)(["admin"]), controllers_1.createSoftSkill);
router.put("/:id", middlewares_1.sessionMiddleware, (0, middlewares_1.roleChecker)(["admin"]), controllers_1.updateSoftSkill);
router.delete("/:id", middlewares_1.sessionMiddleware, (0, middlewares_1.roleChecker)(["admin"]), controllers_1.deleteSoftSkill);
