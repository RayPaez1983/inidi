import { Fragment, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import "./navMenu.scss";
import Header from "../header/header";
import Footer from "../footer/footer";

const NavMenu = () => {
  const [sticky, setSticky] = useState(false)

  const navBarSticky = ()=>{
    if(window.scrollY >= 232){
      setSticky(true)
    }else{
      setSticky(false)
    }
  }

  window.addEventListener('scroll', navBarSticky)
  return (
    <Fragment>
      <Header />
      <nav className={sticky ? 'dos activeNav': 'dos'}>
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
      <Footer/>
    </Fragment>
  );
};

export default NavMenu;
