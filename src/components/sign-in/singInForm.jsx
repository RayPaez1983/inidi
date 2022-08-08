import React from "react";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/user.context";
import {
  singInWithGooglePopup,
  createUserDocumentAuth,
  signInUsingEmailAndPassword,
  signOutUser
} from "../../utils/firebase/firebase.utils";
const formFields = {
  email: "",
  password: "",
};

const SingInForm = () => {
  const [formState, setFormState] = useState(formFields);
  const { email, password } = formState;
  const {setCurrentUser, currentUser} = useContext(UserContext)
  const resetFormFields = () => {
    setFormState(formFields);
  };
  console.log(currentUser, 'whtas this');
  const logInWithGoogle = async () => {
    const { user } = await singInWithGooglePopup();
    await createUserDocumentAuth(user);
    
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const user = await signInUsingEmailAndPassword(email, password);
    
      setCurrentUser(user)
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
  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
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
{currentUser ? (
            <span className='nav-link' onClick={signOutHandler}>
              Cerrar Sesion
            </span>
          ) : (
             <button type="submit"> <Link to={currentUser ?  '/':'/sing-in'}>Iniciar Sesion</Link></button>
          )}
       
        <button onClick={logInWithGoogle}>
          Ingresa Con Tu Cuenta De Google
        </button>
      </form>
    </div>
  );
};

export default SingInForm;
