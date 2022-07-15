
export const getTotalVotesToQuestion = (allAnswersOfSpecificQuestion) => {

    let score = 0;

        (allAnswersOfSpecificQuestion).map((answer)=>{

            score += answer.score
        })
    
    return score;
}
