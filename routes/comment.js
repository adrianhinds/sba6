import mongoose from 'mongoose';

const nameSchema = new mongoose.Schema({
    body: { type: String, required: true},
    borough: {type: String, required: true},
    cuisine: {type: String, required: true},
    name: {type: String, required: true}

})
 const Names = mongoose.model('names', nameSchema);

export default Names;