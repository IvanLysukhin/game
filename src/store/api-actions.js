const ApiRoute = {
  CONTACTS : '/contacts'
}

export const fetchContacts = () => (dispatch, _getState, api) => (
  api.get(ApiRoute.CONTACTS)
    .then(({data}) => {
     console.log(data);
    })
);
