import React from "react";
import {
  singInWithGooglePopup,
  createUserDocumentAuth,

} from "../../../utils/firebase/firebase.utils";
import SingUpForm from '../../sign-up/singUpForm'
import {  Link } from "react-router-dom";

const SingUp = () => {
    const logInWithGoogle = async () => {
      console.log('click');
    const { user } = await singInWithGooglePopup();
    const userDocRef = await createUserDocumentAuth(user);
    console.log(user, "my response", userDocRef);
  };

  return (
    <div>
      <h1>Welcome to Indii</h1>
      <button onClick={logInWithGoogle}>sing in with google</button>
      <SingUpForm/>
      <h2>Si ya tienes una cuenta puedes hacer logging aqui</h2>
      <button><Link to="/sing-in">Inicia Secion</Link></button>
    </div>
  );
};

export default SingUp;
