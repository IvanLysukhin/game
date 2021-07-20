import {useRef} from 'react';
import NumberFormat from 'react-number-format';
import {useDispatch} from 'react-redux';
import {postContact} from '../../store/api-actions';

function Form() {

  const avatar = useRef();
  const avatarInput = useRef();
  const name = useRef();
  const number = useRef();
  const button = useRef();

  const sendStatus = true;
  const fileReader = new FileReader();

  const dispatch = useDispatch();

  const onAvatarChangeHandler = ({target}) => {
    let file = target.files[0];

    fileReader.readAsDataURL(file);

    fileReader.addEventListener('load', () => {
      avatar.current.src = fileReader.result;
    });
  };

  const onFormSubmitHandler = (evt) => {
    evt.preventDefault();

    dispatch(postContact({
      name: name.current.value,
      number: number.current.state.value,
      avatar: avatar.current.src,
    }));
    avatar.current.src = 'img/avatar.svg';
    evt.target.children[4].value = '';
    evt.target.reset();
    button.current.disabled = true;
  };

  const onFormChange = () => {

    if (
      name.current.value.length > 0
      && !!name.current.value.trim()
      && name.current.value.length < 30
      && number.current.state.value.length === 12
    ) {
      button.current.disabled = false;
    }
  }

  return (
    <form
      className="contact-form"
      onSubmit={onFormSubmitHandler}
      onChange={onFormChange}
    >
      <h3 className="visually-hidden">Contact card</h3>
      <input
        className="visually-hidden"
        id="avatar"
        type="file"
        accept="image/jpeg, image/png"
        onChange={onAvatarChangeHandler}
        ref={avatarInput}
      />
      <label className="contact__avatar-load" htmlFor="avatar">
        <img
          className="contact__pic"
          src="img/avatar.svg"
          alt="Contact picture"
          width="100"
          height="100"
          ref={avatar}
        />
      </label>
      <input
        className="contact__name contact__name--input"
        placeholder="John Smith"
        ref={name}
      />
      <NumberFormat
        className="contact__number contact__number--input"
        ref={number}
        placeholder="555-555-5555"
        format="###-###-####"
        value={sendStatus ? '' : ''}
      />
      <ul className="contact__buttons-list">
        <li className="contact__buttons-item">
          <button className="contact__button" name="edit" ref={button} disabled>
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
  );
}

export default Form;
