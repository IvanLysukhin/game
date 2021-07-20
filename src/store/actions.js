import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  LOGIN: 'LOGIN',
  LOAD_CONTACTS: 'LOAD_CONTACTS',
};

export const login = createAction(ActionType.LOGIN);

export const loadContacts = createAction(ActionType.LOAD_CONTACTS, (contacts) => ({
  payload: contacts,
}));

