import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const dedicationSchema = new Schema({
	id: { type: 'String', required: true, unique: true },
	song: { type: 'String', required: true },
	content: { type: 'String', required: true }, 
});

export default mongoose.model('Dedication', dedicationSchema);