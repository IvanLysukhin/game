import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
 LOGIN: 'LOGIN',
};

export const login = createAction(ActionType.LOGIN);

