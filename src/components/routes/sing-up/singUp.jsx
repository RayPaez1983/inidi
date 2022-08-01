import React from "react";
import {
  singInWithGooglePopup,
  createUserDocumentAuth,

} from "../../../utils/firebase/firebase.utils";
import SingUpForm from '../../sign-up/singUpForm'

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
    </div>
  );
};

export default SingUp;
