import Guest from '../models/guest';

// Get all guests
export function getGuests(req, res) {
	Guest.find().exec((err, guests) => {
		if (err) {
			res.status(500).send(err);
		}
		res.json(guests);
	});
}