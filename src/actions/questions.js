export const GET_QUESTIONS = 'GET_QUESTIONS';
export const SAVE_QUESTION = 'SAVE_QUESTION';
export const SAVE_ANSWER = 'SAVE_ANSWER';

export const getQuestions = questions => ({
  type: GET_QUESTIONS,
  questions,
});

export const saveQuestion = question => ({
  type: SAVE_QUESTION,
  question,
});

export const saveAnswer = ({ authedUser, qid, answer }) => ({
  type: SAVE_ANSWER,
  authedUser,
  qid,
  answer,
});
