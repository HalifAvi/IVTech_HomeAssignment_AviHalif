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
            tags: tags
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

