import { useEffect } from "react";
import { getRedirectResult } from "@firebase/auth";

import { Link } from "react-router-dom";
import SingInForm from "../../sign-in/singInForm";
import "./singIn.scss";

const SingIn = () => {
  return (
    <div>
      <h1>Bienvenidos a Indii</h1>
      <SingInForm />

      <h2>No Tienes Una Cuenta</h2>
      <button>
        <Link to="/sing-up">Crea Una!</Link>
      </button>
    </div>
  );
};

export default SingIn;
