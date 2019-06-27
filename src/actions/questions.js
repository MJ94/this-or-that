export const GET_QUESTIONS = 'GET_QUESTIONS';
export const SAVE_QUESTION = 'SAVE_QUESTION';
export const SAVE_ANSWER = 'SAVE_ANSWER';

const getQuestions = questions => ({
  type: GET_QUESTIONS,
  questions,
});

const saveQuestion = question => ({
  type: SAVE_QUESTION,
  question,
});

const saveAnswer = answer => ({
  type: SAVE_ANSWER,
  answer,
});
