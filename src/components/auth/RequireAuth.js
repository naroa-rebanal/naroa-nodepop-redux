import T from 'prop-types';
import { Navigate, useLocation } from 'react-router-dom';
import { getIsLogged } from '../../store/selectors';
import { connect } from 'react-redux';

const RequireAuth = ({ isLogged, children }) => {
  const location = useLocation();

  if (!isLogged) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

RequireAuth.propTypes = {
  isLogged: T.bool,
  children: T.node,
};

const mapStateToProps = state =>{
  return {
    isLogged: getIsLogged(state),
  }
}

 const ConectedRequireAuth = connect(
   mapStateToProps, 
  )(RequireAuth) ;



export default ConectedRequireAuth;
