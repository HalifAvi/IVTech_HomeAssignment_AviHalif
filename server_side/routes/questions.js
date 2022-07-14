import express from 'express';
import {VerifyToken} from '../middleware/VerifyToken.js';
import {

    addQuestion,
    getAllQuestions

 } from '../controllers/QuestionsController.js';

const router = express.Router();


router.post('/createQuestion', VerifyToken, addQuestion);
router.get('/getQuestions', VerifyToken, getAllQuestions);

export default router;
