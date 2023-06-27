import { Router } from "express";
import "dotenv/config";
import fs from "fs";

const router = Router();

const ROUTER_PATH = __dirname;

// fs.readdirSync retorna un array con los nombres de los archivos contenidos en la carpeta actual ./routes
const allRoutes = fs.readdirSync(ROUTER_PATH);

/**
 * Remueve la extensión .route.ts de los archivos de rutas
 * @param filename
 * @returns
 */
function nameWithoutExtension(filename: string) {
  return process.env.NODE_ENV === "development"
    ? filename.replace(".ts", "")
    : filename.replace(".js", "");
}

// asigna las rutas dinámicamente
allRoutes.forEach((routeFile) => {
  const routeName = nameWithoutExtension(routeFile);

  // Crea rutas para todos los archivos menos para index.ts
  if (process.env.NODE_ENV === "development" && routeFile !== "index.ts") {
    // la imprtación retorna una promesa
    import(`./${routeFile}`).then((moduleRouter) => {
      console.log(`Loading route: /${routeName}`);
      // Cada módulo retorna un objeto con la propiedad router, por eso colocamos moduleRouter.router
      router.use(`/${routeName}`, moduleRouter.router);
    });
  } else if (
    process.env.NODE_ENV === "production" &&
    routeFile !== "index.js"
  ) {
    import(`./${routeFile}`).then((moduleRouter) => {
      console.log(`Loading route: /${routeName}`);
      router.use(`/${routeName}`, moduleRouter.router);
    });
  }
});

export { router };
