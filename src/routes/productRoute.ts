import express from 'express';
import { productController } from '../controllers';

const router = express.Router();

router.get('/products', productController.getAllProducts);
router.get('/product', productController.getProductById);
router.put('/product', productController.addProduct);
router.delete('/product', productController.deleteProduct);
router.post('/product', productController.updateProduct);

export default router;
