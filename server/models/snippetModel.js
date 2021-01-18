import mongoose from 'mongoose';

const snippetSchema = mongoose.Schema({
    text:{
    type: String,
    required: true,
    },
    creator:{
        type: String,
        required: true,
    },
})

const AddPhraseSchema = mongoose.model('addPhraseSchema', addPhraseSchema);

export default AddPhraseSchema;