import axios from "axios";
import { ENDPOINT } from "../constants";

// Action Types
export const FETCH_VENUES_REQUEST = "FETCH_VENUES_REQUEST";
export const FETCH_VENUES_SUCCESS = "FETCH_VENUES_SUCCESS";
export const FETCH_VENUES_FAILURE = "FETCH_VENUES_FAILURE";
export const SET_VENUE = "SET_VENUE";

// Action Creators
export const fetchVenuesRequest = () => ({
  type: FETCH_VENUES_REQUEST,
});

export const fetchVenuesSuccess = (venues) => ({
  type: FETCH_VENUES_SUCCESS,
  payload: venues,
});

export const fetchVenuesFailure = (error) => ({
  type: FETCH_VENUES_FAILURE,
  payload: error,
});

// Async Action Creator
export const fetchVenues = () => {
  return (dispatch) => {
    dispatch(fetchVenuesRequest());
    axios
      .get(ENDPOINT)
      .then((response) => {
        const venues = response.data.results;
        dispatch(fetchVenuesSuccess(venues));
      })
      .catch((error) => {
        dispatch(fetchVenuesFailure(error.message));
      });
  };
};

export const setVenue = (venue) => ({
  type: SET_VENUE,
  payload: venue,
});
