import { FETCHING, SUCCESS, FAILURE } from "../actions";

const initialState = {
  // Array characters, Boolean fetching, null error.
  error: null,
  fetching: false,
  characters: []
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCHING:
      return {
        ...state,
        fetching: action.payload.fetching
      }
    case SUCCESS:
      return {
        ...state,
        error: action.payload.error,
        fetching: action.payload.fetching,
        characters: action.payload.characters
       }
    case FAILURE:
       return {
         ...state,
         fetching: action.payload.fetching,
         error: action.payload.error
       }
    default:
      return state;
  }
};
