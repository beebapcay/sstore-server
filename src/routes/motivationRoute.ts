import express from 'express';
import { motivationController } from '../controllers';

const router = express.Router();

router.get('/motivations', motivationController.getAllMotivations);
router.get('/motivation', motivationController.getMotivationById);
router.put('/motivation', motivationController.addMotivation);
router.delete('/motivation', motivationController.deleteMotivation);
router.post('/motivation', motivationController.updateMotivation);

export default router;
