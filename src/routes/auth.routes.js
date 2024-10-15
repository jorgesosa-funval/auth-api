import { login } from "../controllers/auth.controller.js";
import {Router} from 'express';

const auth_routes = Router();

auth_routes.post('/login', login);

export default auth_routes;