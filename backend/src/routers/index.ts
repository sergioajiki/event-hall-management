import { Router } from 'express';
import authRouter from './auth.router';
import eventRouter from './event.router';

const router = Router();

router.use(authRouter);
router.use(eventRouter);
export default router;