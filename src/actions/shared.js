import { getInitialData } from '../utils/api';
import { receiveUsers } from './users';
import { getQuestions } from './questions';
import { setAuthedUser } from './authedUsers';

const AUTHED_ID = 'tylermcginnis';

const handleInitialData = () => dispatch => getInitialData()
  .then(({ users, questions }) => {
    dispatch(receiveUsers(users));
    dispatch(getQuestions(questions));
    dispatch(setAuthedUser(AUTHED_ID));
  });

export default handleInitialData;
