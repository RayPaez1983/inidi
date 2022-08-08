import React from "react";
import { useState, useContext } from "react";
import { UserContext } from "../../context/user.context";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentAuth,
} from "../../utils/firebase/firebase.utils";
const formFields = {
  displayName: "",
  apellido: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SingUpForm = () => {
   const {setCurrentUser} = useContext(UserContext)
  const [formState, setFormState] = useState(formFields);
  const { displayName, apellido, email, password, confirmPassword } = formState;
  const resetFormFields = () => {
    setFormState(formFields);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Clave no coincide");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumentAuth(user, { displayName });

      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Usuario ya cuenta con un perfil");
      }
      console.log(error, "error");
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };
  return (
    <div>
      <h1>Sing up with email and paswword</h1>
      <form onSubmit={handleSubmit} className="container-singIn">
        <label>Nombre</label>
        <input
          required
          onChange={handleChange}
          name="displayName"
          type="text"
          placeholder="nombre"
          value={displayName}
        ></input>
        <label>Apellido</label>
        <input
          required
          onChange={handleChange}
          name="apellido"
          type="text"
          placeholder="Apellido"
          value={apellido}
        ></input>
        <label>Correo Electronico</label>
        <input
          required
          onChange={handleChange}
          name="email"
          type="email"
          placeholder="Correo Electronico"
          value={email}
        ></input>
        <label>Nueva Clave</label>
        <input
          required
          onChange={handleChange}
          name="password"
          type="password"
          placeholder="nueva clave"
          value={password}
        ></input>
        <label>Confirme Su Clave</label>
        <input
          required
          onChange={handleChange}
          name="confirmPassword"
          type="password"
          placeholder="Confirma tu clave"
          value={confirmPassword}
        ></input>
        <button type="submit">Crea Tu Cuenta</button>
      </form>
    </div>
  );
};

export default SingUpForm;
