import {
  FETCH_VENUES_REQUEST,
  FETCH_VENUES_SUCCESS,
  FETCH_VENUES_FAILURE,
} from "../actions/venueActions";

const initialState = {
  venues: [],
  loading: false,
  error: null,
};

const venueReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_VENUES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_VENUES_SUCCESS:
      return {
        ...state,
        loading: false,
        venues: action.payload,
      };
    case FETCH_VENUES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default venueReducer;
