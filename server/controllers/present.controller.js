import Present from '../models/present';

// Get all presents
export function getPresents(req, res) {
	Present.find().exec((err, presents) => {
		if (err) {
			res.status(500).send(err);
		}
		res.json(presents);
	});
}

// Edit a present by id
export function editPresent(req, res) {
		Present.findOneAndUpdate({ id: req.params.id }, { $set: { reserved: req.body.present.reserved }}).exec((err, present) => {
		if (err) {
			res.status(500).send(err);
		}
		res.status(200).end();
	});
}