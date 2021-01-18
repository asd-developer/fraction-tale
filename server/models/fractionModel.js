import mongoose from 'mongoose';

const fractionSchema = mongoose.Schema({
    fraction:{
    type: String,
    required: true,
    },
    creator:{
        type: String,
        required: true,
    },
})

const FractionSchema = mongoose.model('addPhraseSchema', fractionSchema);

export default FractionSchema;