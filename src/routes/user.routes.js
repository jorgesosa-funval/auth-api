import { all, create, show, update, destroy } from "../controllers/user.controller.js";

import { Router } from 'express';

const user_router = Router();

user_router.post('/', create);
user_router.get('/', all);
user_router.get('/:id', show);
user_router.put('/:id', update);
user_router.delete('/:id', destroy);


export default user_router;
