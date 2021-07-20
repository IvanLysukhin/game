import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  LOGIN: 'LOGIN',
  LOAD_CONTACTS: 'LOAD_CONTACTS',
  ADD_CONTACT: 'ADD_CONTACT',
  DELETE_CONTACT: 'DELETE_CONTACT',
};

export const login = createAction(ActionType.LOGIN);

export const loadContacts = createAction(ActionType.LOAD_CONTACTS, (contacts) => ({
  payload: contacts,
}));

export const addContact = createAction(ActionType.ADD_CONTACT, (contact) => ({
  payload: contact,
}));

export const removeContact = createAction(ActionType.DELETE_CONTACT, (id) => ({
  payload: id,
}));

