import NumberFormat from 'react-number-format';
import {useRef} from 'react';
import {useDispatch} from 'react-redux';
import {patchContact} from '../../store/api-actions';

function EditForm({contact,undoHandler}) {

  const {name, number, avatar, id} = contact;

  const avatarRef = useRef();
  const avatarInput = useRef();
  const nameRef = useRef();
  const numberRef = useRef();
  const buttonEditRef = useRef();
  const buttonUndoRef = useRef();

  const dispatch = useDispatch();

  const onAvatarChangeHandler = ({target}) => {
    const fileReader = new FileReader();
    const file = target.files[0];

    fileReader.readAsDataURL(file);

    fileReader.addEventListener('load', () => {
      avatarRef.current.src = fileReader.result;
    });
  };

  const onFormSubmitHandler = (evt) => {
    evt.preventDefault();

    dispatch(patchContact(id,{
      name: nameRef.current.value,
      number: numberRef.current.state.value,
      avatar: avatarRef.current.src,
    }));
    undoHandler(0);
  };

  const onFormChange = () => {
    if (
      nameRef.current.value.length > 0
      && !!nameRef.current.value.trim()
      && nameRef.current.value.length < 30
      && numberRef.current.state.value.length === 12
    ) {
      buttonEditRef.current.disabled = false;
    }
  }

  const onUndoBtnHandler = (evt) => {
    evt.preventDefault();
    undoHandler(0);
  }

  return (
    <li className="contacts-item contact">
      <form
        className="contact-form"
        onChange={onFormChange}
        onSubmit={onFormSubmitHandler}
      >
        <h3 className="visually-hidden">Contact card</h3>
        <input
          className="visually-hidden"
          id={"avatarEdit" + id}
          type="file"
          accept="image/jpeg, image/png"
          ref={avatarInput}
          onChange={onAvatarChangeHandler}

        />
        <label className="contact__avatar-load" htmlFor={"avatarEdit" + id}>
          <img
            className="contact__pic"
            src={avatar}
            alt="Contact picture"
            width="100"
            height="100"
            ref={avatarRef}
          />
        </label>
        <input
          className="contact__name contact__name--input"
          defaultValue={name}
          ref={nameRef}
        />
        <NumberFormat
          className="contact__number contact__number--input"
          format="###-###-####"
          value={number}
          ref={numberRef}
        />
        <ul className="contact__buttons-list">
          <li className="contact__buttons-item">
            <button
              className="contact__button"
              name="ok"
              ref={buttonEditRef}
              disabled
            >
              <svg className="contact__button-pic contact__button-pic--ok" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px">
                <path fill="#4caf50" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"/>
                <path fill="#ccff90"
                      d="M34.602,14.602L21,28.199l-5.602-5.598l-2.797,2.797L21,33.801l16.398-16.402L34.602,14.602z"/>
              </svg>
            </button>
          </li>
          <li className="contact__buttons-item">
            <button
              className="contact__button"
              name="undo"
              onClick={onUndoBtnHandler}
              ref={buttonUndoRef}
            >
              <img className="contact__button-pic" src="img/undo.svg" alt="Undo button"/>
            </button>
          </li>
        </ul>
      </form>
    </li>
  );
}

export default EditForm;
