
export const getTotalVotesToQuestion = (allAnswerOfThisQuestion) => {

    let score = 0;

    if(allAnswerOfThisQuestion !== undefined) {

        (allAnswerOfThisQuestion["allAnswerArr"]).map((answer)=>{

            score += answer["score"]
        })
    
        return score;
    }
}