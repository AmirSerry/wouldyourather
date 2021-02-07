import {_getUsers,_getQuestions } from '../data/_DATA.js'
  
  export function getData () {
    return Promise.all([
      _getUsers(),
      _getQuestions(),
    ]).then(([users, questions]) => ({
      users,
      questions,
    }))
  }