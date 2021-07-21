import {useSelector, useDispatch} from 'react-redux';
import {getSearchedContacts, getSortedContacts, getUserEmail} from '../../store/selectors';
import ContactCard from '../contact-card/contact-card';
import Form from '../form/form';
import {signOut} from '../../store/api-actions';
import {useEffect, useRef} from 'react';
import {fetchContacts} from '../../store/api-actions';
import {searchContacts} from "../../store/actions";

function Main() {
  const loadedContacts = useSelector(getSortedContacts);
  const searchedContacts = useSelector(getSearchedContacts);
  const mail = useSelector(getUserEmail);
  const dispatch = useDispatch();
  const search = useRef();

  let contacts = loadedContacts;

  if (searchedContacts.length > 0) {
    contacts = searchedContacts;
  }

  useEffect(() => {
    dispatch(fetchContacts())
  }, []);

  const onSubmitSearchFormHandler = (evt) => {
    evt.preventDefault();
    const value = search.current.value;

    const searchResults = contacts.filter((contact) => {
      const regex = new RegExp(`${value}`);
      if (contact.number.match(regex)) {
        return contact.id;
      }

      if (contact.name.match(regex)) {
        return contact.id;
      }

    });

    dispatch(searchContacts(searchResults));
  };



  return (
    <div className="main-container">
      <section className="wrapper">
        <header className="title-box">
          <h1 className="title-box__title title-box__title--small">Contacts book</h1>
          <nav className="navigation">
            <p className="navigation__email">{mail}</p>
            <button
              className="navigation__button"
              onClick={() => {
                dispatch(signOut());
              }}
            >
              Sign out
            </button>
            <form
              className="navigation__search-box"
              action="#"
              onSubmit={onSubmitSearchFormHandler}
            >
              <input className="navigation__search" type="text" ref={search}/>
              <button className="navigation__search-button" type="submit">
                <img className="navigation__loupe" src="img/loupe.svg" alt="search button"/>
              </button>
            </form>
            <button
              className="navigation__button"
              type="button"
              onClick={() => {
                dispatch(searchContacts(loadedContacts));
              }}
            >Refresh
            </button>
          </nav>
        </header>
        <div className="contacts-container">
          <h2 className="visually-hidden">Contact list</h2>
          <ul className="contacts-list">
            <li className="contacts-item contact">
              <Form/>
            </li>
            {contacts.map((contact) => <ContactCard key={contact.id} contact={contact}/>)}
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Main;
