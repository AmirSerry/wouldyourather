import {USERS, USER_QUESTION, USER_ANSWER} from '../actions/users'

export default function users(state = {}, action){

    switch(action.type){
        case USERS:
            return {
                ...state,
                ...action.users
            }

        case USER_QUESTION:
           
            return{
                ...state,
                [action.userAuth]:{
                    ...state[action.userAuth],
                    questions: state[action.userAuth].questions.concat([action.questionId])
                }
            }

        case USER_ANSWER:
            return {

                ...state,
                [action.userAuth]:{
                    ...state[action.userAuth],
                    answers:{
                        ...state[action.userAuth].answers,
                        [action.questionId]: action.answer
                    }
                }
            }

        default:
            return state;
    }
}