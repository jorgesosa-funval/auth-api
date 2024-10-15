import { Router } from "express";
import user_router from "./user.routes.js";
import auth_routes from "./auth.routes.js";
import validation from "../middlewares/auth.middleware.js";
const app_router = Router();

/**  
    This function will be used to define all the routes 
    that will be used in the application.
    @param app - express app instance
*/
function routes(app) {
    app.use("/api/v1", app_router);
    app_router.use("/users", validation, user_router);
    app_router.use("/auth", auth_routes);
}

export default routes;