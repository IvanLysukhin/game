import {createSelector} from 'reselect';

export const getAuthStatus = (state) => state.authStatus;
export const getContacts = (state) => state.contacts;
export const getLoadStatus = (state) => state.isDataLoaded;
export const getUserEmail = (state) => state.userEmail;
export const getSearchedContacts = (state) => state.searchResult;

export const getSortedContacts = createSelector(getContacts, (contacts) =>
  [...contacts].sort((a, b) => b.id - a.id)
);
