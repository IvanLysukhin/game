import {createReducer} from '@reduxjs/toolkit';
import {AuthorizationStatus} from "../constants";
import {login} from './actions';

const initialState = {
  authStatus: AuthorizationStatus.AUTH,
};

export const appReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(login, (state) => {
      state.authStatus = AuthorizationStatus.AUTH
    })
});
