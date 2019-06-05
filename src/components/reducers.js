import { CHANGE_SEARCH_FIELD, CHANGE_ACTIVE_CARDID } from './constants.js';

const initialStateSearch = { searchField: '' };
const initialStateActiveCardID = { activeCardID: -1 };

export const searchCompanies = (state = initialStateSearch, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      let updatedSearchText = '';
      if (action.payload) { updatedSearchText = action.payload.target.value; }
      return { ...state, searchField: updatedSearchText };
    default:
      return state;
  }
};

export const updateActiveCardID = (state = initialStateActiveCardID, action = {}) => {
  switch (action.type) {
    case CHANGE_ACTIVE_CARDID:
      return { ...state, activeCardID: action.payload };
    default:
      return state;
  }
};
