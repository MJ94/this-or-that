export const RECEIVE_USERS = 'RECEIVE_USERS';
export const ADD_USER_ANSWER = 'ADD_USER_ANSWER';

export const receiveUsers = users => ({
  type: RECEIVE_USERS,
  users,
});

export const addUserAnswer = (authedUser, qid, answer) => ({
  type: ADD_USER_ANSWER,
  authedUser,
  qid,
  answer,
});
