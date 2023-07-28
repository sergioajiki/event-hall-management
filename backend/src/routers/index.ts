import { Router } from 'express';
import authRouter from './auth.router';
import eventRouter from './event.router';
import eventUserRouter from './eventUser.router'
const router = Router();

router.use(authRouter);
router.use(eventRouter);
router.use(eventUserRouter);

export default router;