import express from 'express';

import { getPhrase, createPhrase } from '../controllers/posts.js'

const router = express.Router();

router.get('/', getPhrase);
router.post('/', createPhrase);

export default router;