import mongoose from 'mongoose';

const addPhraseSchema = mongoose.Schema({
    text: String,
    creator: String,
})

const AddPhraseSchema = mongoose.model('addPhraseSchema', addPhraseSchema);

export default AddPhraseSchema;