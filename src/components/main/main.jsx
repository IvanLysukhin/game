import {useSelector, useDispatch} from 'react-redux';
import {getSortedContacts, getUserEmail} from '../../store/selectors';
import ContactCard from '../contact-card/contact-card';
import Form from '../form/form';
import {signOut} from '../../store/api-actions';
import {useEffect} from 'react';
import {fetchContacts} from '../../store/api-actions';

function Main() {
  const contacts = useSelector(getSortedContacts);
  const mail = useSelector(getUserEmail);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts())
  }, [])

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
