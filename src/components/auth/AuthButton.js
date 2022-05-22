import { useDispatch, useSelector } from 'react-redux';
import { authLogout } from '../../store/actions';
import { useNavigate } from 'react-router-dom';
import { getIsLogged } from '../../store/selectors';
import { logout } from './service';


function AuthButton() {
   const isLogged = useSelector(getIsLogged);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleLogoutClick = async () => {
    await logout();
    dispatch(authLogout());
    // window.location.reload(false);
  };

  const handleLoginClick = async () => {
    navigate('/login');
  };

  return isLogged ? (
    <button className='logBtn' onClick={handleLogoutClick}>
      Logout
    </button>
  ) : (
    <button onClick={handleLoginClick} className='logBtn'>
      Login
    </button>
  );
}



export default AuthButton;
