import Questions from "../models/Questions.js";



export const addQuestion = async (req, res) => {

    const {
        userId, 
        nickname,
        title,
        question,
        tags

    } = req.body;

    try{

        // Create new row in 'allquestions' table
        const answer = await Questions.create({

            userid: userId,
            nickname: nickname,
            title: title,
            question: question,
            tags: tags,
            votes: 0
        })

        res.json(answer.dataValues.createdAt)
    }
    catch(error){

        console.log(error)

        res.status(404).json({msg: 'Error To Add An New Question!'})
    }
}


export const getAllQuestions = async (req, res) => {

    try{

        // Get all questions from 'allquestions' table
        const answer = await Questions.findAll();
        
        res.json(answer)
    }
    catch(error){

        console.log(error)

        res.status(404).json({msg: 'Error To Add An New Question!'})
    }
}


// http://localhost:5000/api/questions/3/-5   ---> (questionId)/(newVotes)
export const voteToQuestion = async (req, res) => {

    let questionId = req.params.questionId;
    let newVotes = req.params.newVotes;

    try{

        // Update the votes score to specific question
        const answer = await Questions.update(
            {

                votes: newVotes

            },
            {
                where: { 
                    
                    id: questionId
                }   
            })    
            
            // לבדוק אם מחזיר באמת את השורה המעודכנת
        res.json(updatedRow)
    }
    catch(error){

        console.log(error)

        res.status(404).json({msg: 'Error To Add An New Question!'})
    }
}

