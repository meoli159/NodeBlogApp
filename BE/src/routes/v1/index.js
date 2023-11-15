import express from 'express';
import { postRoutes } from './post.js';
import { userRoutes } from './user.js';
import { commentRoutes } from './comment.js';
const router = express.Router();

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);

export { router as routes };
