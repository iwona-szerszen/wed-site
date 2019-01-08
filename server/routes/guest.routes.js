import { Router } from 'express';
import * as GuestController from '../controllers/guest.controller';

const router = new Router();

// Get all Guests
router.route('/guests').get(GuestController.getGuests);

export default router;