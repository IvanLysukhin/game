import {useDispatch} from 'react-redux';
import {signIn} from '../../store/api-actions';
import {useRef} from 'react';

function Login() {
  const dispatch = useDispatch();
  const email = useRef()
  const password = useRef()

  const onSubmitHandler = (evt) => {
    evt.preventDefault();
    if (email.current.value.length > 0
      && password.current.value.length > 0) {

      dispatch(signIn({
        email: email.current.value,
        password: password.current.value,

      }));
    }
  }
  const onInputPasswordHandler = ({target}) => {
    if (target.value.match(/\W/)) {
      target.setCustomValidity('Incorrect password');
    } else {
      target.setCustomValidity('');
    }

    target.reportValidity();
  };


  return (
    <div className="login-container">
      <section className="login-wrapper">
        <header className="title-box">
          <h1 className="title-box__title">Contacts book</h1>
        </header>
        <div className="login-form">
          <form
            className="login-form__form"
            action="#"
            method="post"
            onSubmit={onSubmitHandler}
          >
            <ul className="login-form__list">
              <li className="login-form__item">
                <label className="login-form__label" htmlFor="email">E-mail</label>
                <input
                  className="login-form__input"
                  id="email"
                  type="email"
                  ref={email}
                />
              </li>
              <li className="login-form__item">
                <label className="login-form__label" htmlFor="password">Password</label>
                <input
                  className="login-form__input"
                  type="password"
                  id="password"
                  ref={password}
                  onInput={onInputPasswordHandler}
                />
              </li>
              <li className="login-form__item">
                <button className="login-form__button" type="submit">Sign in</button>
              </li>
            </ul>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Login;
