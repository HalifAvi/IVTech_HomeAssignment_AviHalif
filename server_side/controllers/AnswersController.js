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


// http://localhost:5000/api/answers/getAllAnswersByQuestionId/3   ---> (questionId)
export const getAllAnswersByQuestionId = async (req, res) => {

    let questionID = req.params.questionID;

    try{

        // Get all answers from 'allanswers' table according to question id
        const answer = await Answers.findAll({

            where: { 
        
                questionid: questionID
            }
        });
        
        res.json(answer);
    }
    catch(error){

        console.log(error)

        res.status(404).json({msg: 'Error To Add An New Question!'})
    }
}



// http://localhost:5000/api/answers/3/-5   ---> (answerId)/(newVotes)
export const voteToAnswer = async (req, res) => {

    let answerId = req.params.answerId;
    let newScore = req.params.newScore;

    try{

        // Update the votes score to specific answer
        const answer = await Answers.update(
            {

                score: newScore

            },
            {
                where: { 
                    
                    id: answerId
                }   
            })    
            
            // לבדוק אם מחזיר באמת את השורה המעודכנת
        res.json(updatedRow)
    }
    catch(error){

        console.log(error)

        res.status(404).json({msg: 'Error To Update Answer Score!'})
    }
}

