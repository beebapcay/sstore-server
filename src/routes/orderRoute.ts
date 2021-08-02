import express from 'express';
import { orderController } from '../controllers';

const router = express.Router();

router.get('/order', orderController.getOrdersByUserId);
router.post('/order', orderController.saveOrder);

export default router;
