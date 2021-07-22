import express from 'express';
import { categoryController } from '../controllers';

const router = express.Router();

router.get('/categories', categoryController.getAllCategory);
router.get('/category', categoryController.getCategoryById);
router.put('/category', categoryController.addCategory);
router.delete('/category', categoryController.deleteCategory);
router.post('/category', categoryController.updateCategory);

export default router;
