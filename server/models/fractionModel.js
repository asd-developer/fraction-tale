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
},
{timestamps: true,}
);

const FractionSchema = mongoose.model('fraction', fractionSchema);

export default FractionSchema;