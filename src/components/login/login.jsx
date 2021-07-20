import {useHistory} from 'react-router-dom';
import {AppRoute} from '../../constants';


function Login() {
  const history = useHistory();

  const onSubmitHandler = (evt) => {
    evt.preventDefault();
    history.push(AppRoute.MAIN);
  }

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
                <input className="login-form__input" id="email" type="email"/>
              </li>
              <li className="login-form__item">
                <label className="login-form__label" htmlFor="password">Password</label>
                <input className="login-form__input" id="password"/>
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
