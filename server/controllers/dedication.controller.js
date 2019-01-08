import Dedication from '../models/dedication';
import Guest from '../models/guest';
import uuid from 'uuid';
import sanitizeHtml from 'sanitize-html';

// Get all dedications
export function getDedications(req, res) {
	Dedication.find().exec((err, dedications) => {
		if (err) {
			res.status(500).send(err);
		}
		//res.json({ dedications });
		res.json(dedications);
	});
}

// Add a new dedication
export function addDedication(req, res) {
	//if (!req.body.dedication.song || !req.body.dedication.content || !req.body.guestId) {
	if (!req.body.dedication.song || !req.body.dedication.content) {
		res.status(403).end();
	}

	const newDedication = new Dedication(req.body.dedication);
	newDedication.id = uuid();

	// Sanitize inputs
	newDedication.song = sanitizeHtml(newDedication.song);
	newDedication.content = sanitizeHtml(newDedication.content); 

	newDedication.save((err, saved) => {
		if (err) {
			res.status(500).send(err);
		}
		/*
		Guest.findOne({ id: req.body.guestId })
			.then(guest => {
				guest.dedications.push(saved);
				return guest.save();
			})
			.then(() => {
				res.json({ dedication: saved });
			})
		*/
		res.json({ dedication: saved });	
	});
}

// Edit a dedication by id
export function editDedication(req, res) {
	Dedication.findOneAndUpdate({ id: req.params.id }, req.body.dedication, {new: true}).exec((err, updated) => {
		if (err) {
			res.status(500).send(err);
		}
		res.json(updated);
	});
}

// Delete a dedication by id
export function deleteDedication(req, res) {
	Dedication.findOne({ id: req.params.id }).exec((err, dedication) => {
		if (err) {
			res.status(500).send(err);
		}
		dedication.remove(() => {
			res.status(200).end();
		});
	});
}