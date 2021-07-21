import {loadContacts, addContact, removeContact, updateContact} from './actions';

const ApiRoute = {
  CONTACTS : '/contacts'
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
