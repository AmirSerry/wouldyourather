import { QUESTION, QUESTIONS,QUESTION_ANSWER} from '../actions/questions'

export default function questions(state = {}, action){
    switch(action.type){
        case QUESTION:
            const {question} = action;

            return{
                ...state,
                 [question.id]: question,
            }
        
        case QUESTIONS:
            return{
                ...state,
                ...action.questions
            }

        
        case QUESTION_ANSWER:
            const {userAuth, questionId, answer} = action;
            return{
                ...state,
                [questionId]:{
                    ...state[questionId],
                    [answer]:{
                        ...state[questionId][answer],
                        votes: state[questionId][answer].votes.concat([userAuth])
                    }
                }
                
            }

        default:
            return state;
    }
}