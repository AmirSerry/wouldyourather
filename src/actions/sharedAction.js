import { addUsers, userQuestion, userAnswer } from './users'
import { addQuestion, addQuestions, questionAnswer } from './questions'
import { _saveQuestionAnswer, _saveQuestion } from '../data/_DATA'
import { getData } from '../api/api'

export function handleData() {
    return (dispatch) => {
        return getData()
            .then(({ users, questions})=> {
                dispatch(addUsers(users));
                dispatch(addQuestions(questions))
        })
    }
}


export function handleQuestion (optionOne, optionTwo){
    return (dispatch, getState) => {
        const { userAuth } = getState();
        return _saveQuestion({
            optionOne,
            optionTwo,
            author: userAuth
        })
        .then((question) => {
            dispatch(addQuestion(question));
            dispatch(userQuestion(userAuth, question.id))
        })

    }
}

export function handleAnswer (questionId, answer) {
    return (dispatch, getState) => {
      const { userAuth } = getState();
      const data = {
        userAuth,
        questionId,
        answer: answer
      };
      _saveQuestionAnswer(data)
          .then(() => {
              dispatch(questionAnswer(userAuth, questionId, answer));
              dispatch(userAnswer(userAuth, questionId, answer))
          })
    }
}