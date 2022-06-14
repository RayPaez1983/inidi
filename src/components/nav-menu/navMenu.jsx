import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import "./navMenu.scss";
import Header from "../header/header";

const NavMenu = () => {
  return (
    <Fragment>
      <Header />
      <nav className="dos">
        <div className="wrap">
          <nav className="tres">
            <ul>
              <li>
                <Link to="/women">Mujer</Link>
              </li>
              <li>
                  <Link to="/men">Hombre</Link>
              
              </li>
              <li>
                 <Link to="/kids">Kids</Link> 
               
              </li>
              <li>
                  <Link to="/family">Familia</Link> 
                
              </li>
              <li>
                  <Link to="/accessories">Accesorios</Link> 
                
              </li>
            </ul>
          </nav>
        </div>
      </nav>
      <Outlet />
    </Fragment>
  );
};

export default NavMenu;
