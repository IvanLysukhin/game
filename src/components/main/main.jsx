import {useSelector} from 'react-redux';
import {getContacts} from '../../store/selectors';
import ContactCard from "../contact-card/contact-card";

function Main() {
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
            <li className="contacts-item contact">
              <form className="contact-form">
                <h3 className="visually-hidden">Contact card</h3>
                <input className="visually-hidden" id="avatar" type="file" accept="image/jpeg, image/png"/>
                <label className="contact__avatar-load" htmlFor="avatar">
                  <img className="contact__pic" src="img/avatar.svg" alt="Contact picture" width="100" height="100"/>
                </label>
                <input className="contact__name contact__name--input" placeholder="John Smith"/>
                <input className="contact__number contact__number--input" type="number" placeholder="555-555-5555"/>
                <ul className="contact__buttons-list">
                  <li className="contact__buttons-item">
                    <button className="contact__button" name="edit">
                      <svg className="contact__button-pic contact__button-pic--add-button" fill="#000000"
                           xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50px"
                           height="50px">
                        <path
                          d="M25,2C12.317,2,2,12.317,2,25s10.317,23,23,23s23-10.317,23-23S37.683,2,25,2z M37,26H26v11h-2V26H13v-2h11V13h2v11h11V26z"/>
                      </svg>
                    </button>
                  </li>
                </ul>
              </form>
            </li>
            {contacts.map((contact) => <ContactCard key={contact.id} contact={contact}/>)}
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Main;
