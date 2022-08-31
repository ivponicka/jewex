import { Fragment, useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/jew.svg";
import { auth, signOutUser } from "../../utils/firebase/firebase.utils";
import './navigation.styles.scss'

const Navigation = () => {
  const {currentUser} = useContext(UserContext)


  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-containter" to="/">
          <Logo className="logo" style={{ width: "50px"  }} />
        </Link>
        <div className="nav-links-containter">
          <Link className='nav-link' to="/shop">
            Shop
          </Link>
          {
            currentUser ? (
              <span className="nav-link" onClick={signOutUser}>SIGN OUT</span>
             ) :  (<Link className="nav-link" to="/auth"> SIGN IN
             </Link>)
          }
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
