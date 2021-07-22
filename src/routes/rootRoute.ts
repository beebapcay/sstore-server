import express from 'express';
import { rootController } from '../controllers';

const router = express.Router();

router.use('/', rootController.getAvailability);

export default router;
