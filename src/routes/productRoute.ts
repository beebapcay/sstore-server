import express from 'express';
import controller from '../controllers/productController';

const router = express.Router();

router.get('/products', controller.getAllProducts);
router.get('/product', controller.getProductById);
router.put('/product', controller.addProduct);
router.delete('/product', controller.deleteProduct);
router.post('/product', controller.updateProduct);

export default router;
