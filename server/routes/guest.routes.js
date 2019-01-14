import { Router } from 'express';
import * as GuestController from '../controllers/guest.controller';

const router = new Router();

// Get all Guests
router.route('/guests').get(GuestController.getGuests);

// Edit a guest by id
router.route('/guests/:id').put(GuestController.editGuest);


export default router;