import {useDispatch} from 'react-redux';
import {deleteContact} from "../../store/api-actions";

function ContactCard({contact}) {
  const {name, number, avatar, id} = contact;

  const dispatch = useDispatch();

  const onDeleteBtnClick = () => {
    dispatch(deleteContact(id));
  };

  return (
    <li className="contacts-item contact">
      <h3 className="visually-hidden">Contact card</h3>
      <img className="contact__pic" src={avatar} alt="Contact picture" width="100" height="100"/>
      <p className="contact__name">{name}</p>
      <a className="contact__number" href={`tel:${number}`}>{number}</a>
      <ul className="contact__buttons-list">
        <li className="contact__buttons-item">
          <button className="contact__button" name="edit">
            <svg className="contact__button-pic" fill="#4a90e2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                 width="24px" height="24px">
              <path
                d="M 19.171875 2 C 18.448125 2 17.724375 2.275625 17.171875 2.828125 L 16 4 L 20 8 L 21.171875 6.828125 C 22.275875 5.724125 22.275875 3.933125 21.171875 2.828125 C 20.619375 2.275625 19.895625 2 19.171875 2 z M 14.5 5.5 L 3 17 L 3 21 L 7 21 L 18.5 9.5 L 14.5 5.5 z"/>
            </svg>
          </button>
        </li>
        <li className="contact__buttons-item">
          <button className="contact__button" name="delete" onClick={onDeleteBtnClick}>
            <svg className="contact__button-pic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="64px"
                 height="64px">
              <path fill="#E04F5F"
                    d="M504.1,256C504.1,119,393,7.9,256,7.9C119,7.9,7.9,119,7.9,256C7.9,393,119,504.1,256,504.1C393,504.1,504.1,393,504.1,256z"/>
              <path fill="#FFF"
                    d="M285,256l72.5-84.2c7.9-9.2,6.9-23-2.3-31c-9.2-7.9-23-6.9-30.9,2.3L256,222.4l-68.2-79.2c-7.9-9.2-21.8-10.2-31-2.3c-9.2,7.9-10.2,21.8-2.3,31L227,256l-72.5,84.2c-7.9,9.2-6.9,23,2.3,31c4.1,3.6,9.2,5.3,14.3,5.3c6.2,0,12.3-2.6,16.6-7.6l68.2-79.2l68.2,79.2c4.3,5,10.5,7.6,16.6,7.6c5.1,0,10.2-1.7,14.3-5.3c9.2-7.9,10.2-21.8,2.3-31L285,256z"/>
            </svg>
          </button>
        </li>
      </ul>
    </li>
  );
}

export default ContactCard;
