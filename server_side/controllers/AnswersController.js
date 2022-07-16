import Answers from "../models/Answers.js";



export const addAnswer = async (req, res) => {

    const {

        userId, 
        questionId,
        nickname,
        userAnswer

    } = req.body;

    try{

        // Create new row in 'allanswers' table
        const answer = await Answers.create({

            userid: userId,
            questionid: Number(questionId),
            nickname: nickname,
            answer: userAnswer,
            score: 0
        })

        res.json(answer.dataValues.createdAt)
    }
    catch(error){

        console.log(error)

        res.status(404).json({msg: 'Error To Add An New Answer!'})
    }
}


export const voteToAnswer = async (req, res) => {

    let answerId = req.body.answerID;
    let newScore = req.body.updatedVote;

    try{

        // Update the votes score to specific answer
        await Answers.update(
            {
                score: newScore
            },
            {
                where: { 
                    
                    id: answerId
                }   
            })    
            
        res.json({msg: 'Answer Vote Was Updated Successfuly!'})
    }
    catch(error){

        console.log(error)

        res.status(404).json({msg: 'Error To Update Answer Vote!'})
    }
}

export const getAllAnswers = async (req, res) => {

    try{

        // Get all answers from 'allanswers' table
        const answer = await Answers.findAll();
        
        res.json(answer)
    }
    catch(error){

        console.log(error)

        res.status(404).json({msg: 'Error To Add An New Question!'})
    }
}
