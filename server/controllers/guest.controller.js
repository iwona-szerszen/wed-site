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

// Edit a guest by id
export function editGuest(req, res) {
	Guest.findOneAndUpdate({ id: req.params.id }, req.body.guest, {new: true}).exec((err, updated) => {
		if (err) {
			res.status(500).send(err);
		}
		res.json(updated);
	});
}