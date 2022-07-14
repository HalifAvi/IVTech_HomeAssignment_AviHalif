
export const getTotalVotesToQuestion = (allAnswerOfThisQuestion) => {

    let score = 0;

        (allAnswerOfThisQuestion).map((answer)=>{

            score += answer.score
        })
    
    return score;
}
