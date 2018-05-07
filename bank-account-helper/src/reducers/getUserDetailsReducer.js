import actions from '../actions/actionTypes';

const defaultState = {
  details: {},
};

export default function getUserDetails(state = defaultState, action) {
  switch (action.type) {
    case actions.GET_USER_DETAILS:
      return {
        ...state,
        details: {
          name: action.value.full_name,
          email: action.value.emails[0],
          address: action.value.addresses[0].address,
          city: action.value.addresses[0].city,
          postcode: action.value.addresses[0].zip,
          country: action.value.addresses[0].country,
          phone: action.value.phones[0],
        },
      };
    default:
      return { ...state };
  }
}
