import express from 'express';
import { userController } from '../controllers';

const router = express.Router();

router.get('/users', userController.getAllUsers);
router.get('/user', userController.getUserById);
router.put('/user', userController.addUser);
router.delete('/user', userController.deleteUser);
router.post('/user', userController.updateUser);

export default router;
