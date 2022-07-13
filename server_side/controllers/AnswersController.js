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
            questionid: questionId,
            nickname: nickname,
            answer: userAnswer
        })

        res.json(answer.dataValues.createdAt)
    }
    catch(error){

        console.log(error)

        res.status(404).json({msg: 'Error To Add An New Answer!'})
    }
}


// http://localhost:5000/api/answers/3   ---> (questionId)
export const getAllAnswersByQuestionId = async (req, res) => {

    let questionID = req.params.questionID

    try{

        // Get all answers from 'allanswers' table according to question id
        const answer = await Answers.findAll({

            where: { 
        
                questionid: questionID
            }
        });
        
        res.json(answer)
    }
    catch(error){

        console.log(error)

        res.status(404).json({msg: 'Error To Add An New Question!'})
    }
}