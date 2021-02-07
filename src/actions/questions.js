export const QUESTIONS = 'QUESTIONS';
export const QUESTION = 'QUESTION';
export const QUESTION_ANSWER = 'QUESTION_ANSWER';

export function addQuestion (question) {
    return {
      type: QUESTION,
      question
    }
  }
  
  export function addQuestions(questions){
    return{
      type: QUESTIONS,
      questions
    }
  }
  
  export function questionAnswer(userAuth, questionId, answer) {
    return {
      type: QUESTION_ANSWER,
      userAuth,
      questionId,
      answer
    }
  }