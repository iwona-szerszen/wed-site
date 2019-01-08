import Present from '../models/present';

// Get all presents
export function getPresents(req, res) {
	Guest.find().exec((err, presents) => {
		if (err) {
			res.status(500).send(err);
		}
		res.json({ presents });
	});
}