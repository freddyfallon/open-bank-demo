import request from 'request-promise-native';
import actions from './actionTypes';

export const getUserDetails = detail => ({
  type: actions.GET_USER_DETAILS,
  value: detail,
});

export const requestUserDetails = token => async (dispatch) => {
  const data = await request(`${process.env.REACT_APP_BANK_ROBBER_URL}/user-details`, {
    method: 'POST',
    body: {
      token,
    },
    uri: `${process.env.REACT_APP_BANK_ROBBER_URL}/user-details`,
    json: true,
  });
  const [result] = data.results;
  dispatch(getUserDetails(result));
};
