import {loadContacts, addContact, removeContact, updateContact, requireAuthorization} from './actions';
import {AuthorizationStatus} from '../constants';

const ApiRoute = {
  CONTACTS: '/contacts',
  LOGIN: '/login',
};

export const fetchContacts = () => (dispatch, _getState, api) => (
  api.get(ApiRoute.CONTACTS)
    .then(({data}) => {
      dispatch(loadContacts(data));
    })
);

export const postContact = ({name, number, avatar}) => (dispatch, _getState, api) => (
  api.post(ApiRoute.CONTACTS, {name, number, avatar})
    .then(({data}) => {
      dispatch(addContact(data));
    })
);

export const deleteContact = (id) => (dispatch, _getState, api) => (
  api.delete(`${ApiRoute.CONTACTS}/${id}`)
    .then(() => {
      dispatch(removeContact(id));
    })
);

export const patchContact = (id, {name, number, avatar}) => (dispatch, _getState, api) => (
  api.patch(`${ApiRoute.CONTACTS}/${id}`, {name, number, avatar})
    .then(({data}) => {
      dispatch(updateContact(data));
    })
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(ApiRoute.LOGIN)
    .then(({data}) => {
      if (localStorage.getItem('token') === data.token.toString()) {
        dispatch(requireAuthorization({
          status: AuthorizationStatus.AUTH,
          email: data.email,
        }));
        return;
      }
      dispatch(requireAuthorization({
        status: AuthorizationStatus.NO_AUTH,
        email: '',
      }));
    })
);

export const signIn = ({email, password}) => (dispatch, _getState, api) => (
  api.patch(ApiRoute.LOGIN, {email, password})
    .then(({data}) => {
      localStorage.setItem('token', data.token);
      dispatch(requireAuthorization({
        status: AuthorizationStatus.AUTH,
        email: email,
      }));
    })
);

export const signOut = () => (dispatch, _getState, api) => (
  api.patch(ApiRoute.LOGIN, {email: '', password: ''})
    .then(() => {
      localStorage.clear()
      dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH));
    })
);
