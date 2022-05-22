import { Link, NavLink } from 'react-router-dom';
import classNames from 'classnames';
import AuthButton from '../auth/AuthButton';

import { ReactComponent as Icon } from '../../assets/nodepop.svg';


function Header({ className }) {
  return (
    <header className={classNames('header', className)}>
      <Link to="/">
        <div className="header-logo">
          <Icon width="150"/>
        </div>
      </Link>
      <nav className="header-nav">
      <NavLink 
          to="/adverts"
        >
          Adverts
        </NavLink>
        <NavLink
          to="/adverts/new"          
        >
          Create Advert
        </NavLink>

        <AuthButton className="header-button" />
      </nav>
    </header>
  );
}

export default Header;
