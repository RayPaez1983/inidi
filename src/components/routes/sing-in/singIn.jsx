import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import './singIn.scss'

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Por favor ingresa tu nombre"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Por favor ingresa tu apellido"),
  email: Yup.string().email("Email no valido").required("Por favor ingresa tu email"),
  password: Yup.string().required("Por favor ingresa tu nuevo password").min(6, "Tu password debe tener minimo 6 caracteres!"),
  passwordConfirmation: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Por favor confirma tu password"
  ),
});

const SingIn = () => (
  <div >
    <h1>Welcome to Indii</h1>
    <Formik
      initialValues={{
        name: "",
        lastName: "",
        email: "",
        password: "",
        passwordConfirmation: "",
      }}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        // same shape as initial values
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form className="container-singIn">
          Nombre
          <Field name="firstName" />
          {errors.firstName && touched.firstName ? (
            <div>{errors.firstName}</div>
          ) : null}
          Apellido
          <Field name="lastName" />
          {errors.lastName && touched.lastName ? (
            <div>{errors.lastName}</div>
          ) : null}
          Email
          <Field name="email" type="email" />
          {errors.email && touched.email ? <div>{errors.email}</div> : null}
          Password
          <Field name="password" type="password" />
          {errors.password && touched.password ? (
            <div>{errors.password}</div>
          ) : null}
          Confirmacion del Password
          <Field name="passwordConfirmation" type="password" />
          {errors.passwordConfirmation && touched.passwordConfirmation ? (
            <div>{errors.passwordConfirmation}</div>
          ) : null}
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
);

export default SingIn;
