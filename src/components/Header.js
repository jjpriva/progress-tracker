import css from "./Header.module.css";
import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const authData = useSelector((state) => state.auth);

  return (
    <header>
      <div className={css.headingContainer}>
        <h1 className={css.heading}>Progress Tracker</h1>
        {!authData.isLoggedIn && <Link to="authenticate">Login to save data</Link>}
        {authData.isLoggedIn && <p>Logged in as {authData.email}</p>}
      </div>
      <div className={css.menuSelections}>
        <NavLink
          to="/entries"
          className={(navData) =>
            navData.isActive ? css.active : css.inactive
          }
        >
          <div className={`${css.menuItem} iconTextLink`}>
            <span className="material-icons-outlined">edit_note</span>
            <span>Entries</span>
          </div>
        </NavLink>

        {/* <NavLink
          to="/addnew"
          className={(navData) =>
            navData.isActive ? css.active : css.inactive
          }
        >
          <div className={css.menuItem}>Add New</div>
        </NavLink> */}

        <NavLink
          to="/graphs"
          className={(navData) =>
            navData.isActive ? css.active : css.inactive
          }
        >
          <div className={`${css.menuItem} iconTextLink`}>
            <span className="material-icons-outlined">timeline</span>
            <span>Graphs</span>
          </div>
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
