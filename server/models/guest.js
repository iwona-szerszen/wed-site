import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const guestSchema = new Schema({
	id: { type: 'String', required: true, unique: true },
	names: { type: 'String', required: true },
	relationship: { type: 'String', required: true },
	totalMembers: { type: 'Number', required: true },
	confirmed: { type: 'Boolean', required: true },
	attended: { type: 'Boolean', required: false },
	presents: [{ type: Schema.ObjectId, ref: 'Present', required: false }],
	dedications: [{ type: Schema.ObjectId, ref: 'Dedication', required: false }],
});

export default mongoose.model('Guest', guestSchema);