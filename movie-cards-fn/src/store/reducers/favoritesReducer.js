import {
  ADDED_FAVORITE,
  REMOVED_FAVORITE,
  REMOVE_MODE_TOGGLED,
} from '../actions/types';

// Add functionality to display message on add and delete.
// as well as Show delete button if it exists in favorites...

const initialState = {
  favorites: localStorage.getItem('favorites')
    ? JSON.parse(localStorage.getItem('favorites'))
    : [],
  removeMode: true,
};

export default function favorites(state = initialState, action) {
  switch (action.type) {
    case ADDED_FAVORITE:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };

    case REMOVED_FAVORITE:
      return {
        ...state,
        favorites: action.payload,
      };

    case REMOVE_MODE_TOGGLED:
      return {
        ...state,
        removeMode: action.payload,
      };

    default:
      return state;
  }
}
