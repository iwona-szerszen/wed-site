import { Router } from 'express';
import * as PresentController from '../controllers/present.controller';

const router = new Router();

// Get all Presents
router.route('/presents').get(PresentController.getPresents);

export default router;