import AddPhraseSchema from '../models/addPhrase.js'

export const getPhrase = async (req,res) =>{
    try{
        const getPhrases = await AddPhraseSchema.find()

        console.log(getPhrases);

        res.status(200).json(getPhrases)
    } catch(error){
        res.status(404).json({message: error.message});
    }
}

export const createPhrase = async (req,res) =>{
    const post = req.body;

    const newPost = new AddPhraseSchema(post);
    try{
        await newPost.save()

        res.status(201).json(newPost)
    } catch(error){
        res.status(409).json({message: error.message});
    }
}