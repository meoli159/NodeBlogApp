import express from 'express';
import { logIn, register } from '../../controllers/v1/user.js';

const userRoutes = express.Router();
userRoutes.post('/login', logIn);
userRoutes.post('/register', register);
export { userRoutes };
