import { commonConstants } from '../_constants';

export function commonReducer(state = {}, action) {
  switch (action.type) {
    case commonConstants.PASS_ALL_REQUEST:
      return {
        loading: action.data
      };
    case commonConstants.PASS_ALL_SUCCESS:
      return {
        responsedata: action.data
      };
    case commonConstants.PASS_ALL_FAILURE:
      return { 
        error: action.error
      };
    default:
      return state
  }
}