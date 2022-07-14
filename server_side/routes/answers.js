import express from 'express';
import {VerifyToken} from '../middleware/VerifyToken.js';
import {

    addAnswer,
    getAllAnswersByQuestionId,
    voteToAnswer

 } from '../controllers/AnswersController.js';

const router = express.Router();


router.post('/createAnswer', VerifyToken, addAnswer);
router.get('/getAllAnswersByQuestionId/:questionID', VerifyToken, getAllAnswersByQuestionId);
router.put('/voteToAnswer', VerifyToken, voteToAnswer);



export default router;
