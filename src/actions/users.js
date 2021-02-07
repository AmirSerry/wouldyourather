export const USERS = 'USERS';
export const USER_QUESTION = 'USER_QUESTION';
export const USER_ANSWER = 'USER_ANSWER';

export function addUsers(users){
    return {
        type: USERS,
        users
    }
}

export function userQuestion(userAuth,questionId){
    return {
        type: USER_QUESTION,
        userAuth,
        questionId
    }
}

export function userAnswer(userAuth, questionId, answer){
    return {
        type: USER_ANSWER,
        userAuth,
        questionId,
        answer
    }
}

