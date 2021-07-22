import express from 'express';
import { rootController } from '../controllers';

const router = express.Router();

router.get('/', rootController.getAvailability);

export default router;
