import express from 'express';
import {VerifyToken} from '../middleware/VerifyToken.js';
import {

    addAnswer,
    voteToAnswer,
    getAllAnswers

 } from '../controllers/AnswersController.js';

const router = express.Router();


router.post('/createAnswer', VerifyToken, addAnswer);
router.put('/voteAnswer', VerifyToken, voteToAnswer);
router.get('/allAnswers', VerifyToken, getAllAnswers);




export default router;
