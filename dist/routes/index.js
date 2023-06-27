"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
require("dotenv/config");
const fs_1 = __importDefault(require("fs"));
const router = (0, express_1.Router)();
exports.router = router;
const ROUTER_PATH = __dirname;
// fs.readdirSync retorna un array con los nombres de los archivos contenidos en la carpeta actual ./routes
const allRoutes = fs_1.default.readdirSync(ROUTER_PATH);
/**
 * Remueve la extensión .route.ts de los archivos de rutas
 * @param filename
 * @returns
 */
function nameWithoutExtension(filename) {
    return process.env.NODE_ENV === "development"
        ? filename.replace(".ts", "")
        : filename.replace(".js", "");
}
// asigna las rutas dinámicamente
allRoutes.forEach((routeFile) => {
    var _a, _b;
    const routeName = nameWithoutExtension(routeFile);
    // Crea rutas para todos los archivos menos para index.ts
    if (process.env.NODE_ENV === "development" && routeFile !== "index.ts") {
        // la imprtación retorna una promesa
        (_a = `./${routeFile}`, Promise.resolve().then(() => __importStar(require(_a)))).then((moduleRouter) => {
            console.log(`Loading route: /${routeName}`);
            // Cada módulo retorna un objeto con la propiedad router, por eso colocamos moduleRouter.router
            router.use(`/${routeName}`, moduleRouter.router);
        });
    }
    else if (process.env.NODE_ENV === "production" &&
        routeFile !== "index.js") {
        (_b = `./${routeFile}`, Promise.resolve().then(() => __importStar(require(_b)))).then((moduleRouter) => {
            console.log(`Loading route: /${routeName}`);
            router.use(`/${routeName}`, moduleRouter.router);
        });
    }
});
