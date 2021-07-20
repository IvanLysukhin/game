import {createReducer} from '@reduxjs/toolkit';
import {AuthorizationStatus} from "../constants";
import {login, loadContacts} from './actions';

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
});
