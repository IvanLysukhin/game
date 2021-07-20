import {createReducer} from '@reduxjs/toolkit';
import {AuthorizationStatus} from "../constants";
import {login, loadContacts, addContact, removeContact} from './actions';

const initialState = {
  authStatus: AuthorizationStatus.AUTH,
  contacts: [],
};

export const appReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(login, (state) => {
      state.authStatus = AuthorizationStatus.AUTH
    })
    .addCase(loadContacts, (state, action) => {
      state.contacts = action.payload;
    })

    .addCase(addContact, (state, action) => {
      state.contacts = [...state.contacts, action.payload];
    })
    .addCase(removeContact, (state, action) => {
      const index = state.contacts.findIndex((contact) => contact.id === action.payload);
      state.contacts = [...state.contacts.slice(0, index), ...state.contacts.slice(index + 1, state.contacts.length)];
    })
});
