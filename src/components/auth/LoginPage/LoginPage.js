import { useCallback, useMemo, useState } from 'react';
import FormField from '../../common/FormField';
import T from 'prop-types';
import { authLogin, uiResetError } from '../../../store/actions';
import { useDispatch, useSelector } from 'react-redux';
import { getUi } from '../../../store/selectors';



function LoginPage() {

 
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
    remember: false,
  });

const dispatch = useDispatch();
const {isLoading, error }= useSelector(getUi);

  const { email, password, remember } = credentials;

 const handleChange = useCallback(
  ({ target: { value, name, type, checked } }) => {
    setCredentials(credentials => ({
      ...credentials,
     /* [event.target.name]:
        event.target.type === 'checkbox'
          ? event.target.checked
          : event.target.value,*/
          [name]: type === 'checkbox' ? checked : value,
    }));
  }, []); 

  const resetError = () => dispatch(uiResetError());


  const handleSubmit = async event => {
    event.preventDefault();
    dispatch(authLogin(credentials, ));

  };

  const buttonDisabled = useMemo(() => {
    return !email || !password || isLoading;
  }, [email, password, isLoading]);

  return (
    <div className="loginPage">
      <h1 className="loginPage-title">Log in</h1>
      <form className="loginForm" onSubmit={handleSubmit}>
        <FormField
          type="text"
          name="email"
          label="Email"
          className="loginForm-field"
          value={email}
          onChange={handleChange}
          // ref={ref}
        />
        <FormField
          type="password"
          name="password"
          label="Password"
          className="loginForm-field"
          value={password}
          onChange={handleChange}
          //ref={ref}
        />
        <input
          type="checkbox"
          name="remember"
          label="Remember"
          checked={remember}
          value="remember"
          onChange={handleChange}
        />        Remember me?

        <button
          className="login-submit"
          type="submit"
          disabled={buttonDisabled}
        >
          Log in
        </button>
      </form>
      {error && (
        <div onClick={resetError} className="loginPage-error">
          {error.message}
        </div>
      )}
    </div>
  );
}

LoginPage.propTypes = {
  onLogin: T.func,
};





export default LoginPage;
