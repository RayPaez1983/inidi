import React from "react";
import { useState } from "react";

import {
  singInWithGooglePopup,
  createUserDocumentAuth,
  signInUsingEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
const formFields = {
  email: "",
  password: "",
};

const SingInForm = () => {
  const [formState, setFormState] = useState(formFields);
  const { email, password } = formState;
  const resetFormFields = () => {
    setFormState(formFields);
  };
  const logInWithGoogle = async () => {
    const { user } = await singInWithGooglePopup();
    await createUserDocumentAuth(user);
    
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await signInUsingEmailAndPassword(email, password);
      console.log(response, "sing in user");
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password': 
           alert('Clave Errada')
          break;
          case 'auth/user-not-found': 
           alert('Verifica El Ususario')
          break;
      
      
        default:
          break;
      }
    
      console.log(error);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };
  return (
    <div>
      <h1>Ingresa</h1>
      <form onSubmit={handleSubmit} className="container-singIn">
        <label>Correo Electronico</label>
        <input
          required
          onChange={handleChange}
          name="email"
          type="email"
          placeholder="Correo Electronico"
          value={email}
        ></input>
        <label>Clave</label>
        <input
          required
          onChange={handleChange}
          name="password"
          type="password"
          placeholder="Nueva Clave"
          value={password}
        ></input>

        <button type="submit">Ingresa!</button>
        <button onClick={logInWithGoogle}>
          Ingresa Con Tu Cuenta De Google
        </button>
      </form>
    </div>
  );
};

export default SingInForm;
