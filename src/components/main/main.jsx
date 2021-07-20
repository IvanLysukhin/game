import {useSelector} from 'react-redux';
import {getContacts} from '../../store/selectors';
import ContactCard from "../contact-card/contact-card";

function Main () {
  const contacts = useSelector(getContacts);

  return (
    <div className="main-container">
      <section className="wrapper">
        <header className="title-box">
          <h1 className="title-box__title title-box__title--small">Contacts book</h1>
        </header>
        <div className="contacts-container">
          <h2 className="visually-hidden">Contact list</h2>
          <ul className="contacts-list">
            {contacts.map((contact) => <ContactCard key={contact.id} contact={contact}/>)}
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Main;
