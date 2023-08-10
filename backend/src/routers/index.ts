import { Router } from 'express';
import authRouter from './auth.router';
import eventRouter from './event.router';
import eventUserRouter from './eventUser.router'
import userRouter from './user.router';
const router = Router();

router.use(authRouter);
router.use(eventRouter);
router.use(eventUserRouter);
router.use(userRouter);

export default router;