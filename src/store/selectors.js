import {createSelector} from 'reselect';

export const getAuthStatus = (state) => state.authStatus;
export const getContacts = (state) => state.contacts;

export const getSortedContacts = createSelector(getContacts, (contacts) =>
  [...contacts].sort((a, b) => b.id - a.id)
);
