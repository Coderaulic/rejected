import { CHANGE_SEARCH_FIELD, CHANGE_ACTIVE_CARDID } from './constants.js';

export const setSearchField = (text) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text
});

export const setActiveCardID = (newID) => ({
  type: CHANGE_ACTIVE_CARDID,
  payload: newID
});
