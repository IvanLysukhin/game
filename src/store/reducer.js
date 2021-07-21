import {createReducer} from '@reduxjs/toolkit';
import {AuthorizationStatus} from '../constants';
import {loadContacts, addContact, removeContact, updateContact, requireAuthorization} from './actions';

const initialState = {
  authStatus: AuthorizationStatus.NO_AUTH,
  contacts: [],
  isDataLoaded: false,
  userEmail: '',
};

export const appReducer = createReducer(initialState, (builder) => {
  builder
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
    .addCase(updateContact, (state, action) => {
      state.contacts = state.contacts.map((contact) => {
        if (contact.id === action.payload.id) {
          return action.payload;
        }
        return contact;
      })
    })
    .addCase(requireAuthorization, (state, action) => {
    state.authStatus = action.payload.status;
    state.userEmail = action.payload.email;
    state.isDataLoaded = true;
  })
});
