import express from 'express';
import { login, register } from '../../controllers/v1/user.js';

const userRoutes = express.Router();
userRoutes.post('/login', login);
userRoutes.post('/register', register);
export { userRoutes };
