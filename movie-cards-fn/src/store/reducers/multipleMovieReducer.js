import { updateObject } from '../../utils';
import {
  FETCH_MOVIES_INITIATED,
  FETCH_MOVIES_FAILED,
  FETCH_MOVIES_SUCCEEDED,
  SEARCH_QUERY_SUBMITTED,
} from '../actions/types';

const initialState = {
  movies: [],
  page: 0,
  totalPages: 0,
  submittedQuery: '',
  isError: false,
  isLoading: false,
};

export default function multiple(state = initialState, action) {
  switch (action.type) {
    case FETCH_MOVIES_INITIATED:
      return updateObject(state, {
        isError: false,
        isLoading: true,
      });
    case FETCH_MOVIES_SUCCEEDED:
      return updateObject(state, {
        movies: action.payload,
        page: action.page,
        totalPages: action.totalPages,
        isError: false,
        isLoading: false,
      });
    case FETCH_MOVIES_FAILED:
      return updateObject(state, {
        isError: true,
        isLoading: false,
      });
    case SEARCH_QUERY_SUBMITTED:
      return {
        ...state,
        submittedQuery: action.payload,
      };
    default:
      return state;
  }
}
