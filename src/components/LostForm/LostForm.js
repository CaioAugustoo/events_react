import React, { useState } from "react";
import { FormStyled} from '../NewEventForm/style';
import firebase from "../../config/firebase";
import "firebase/auth";
import Button from "../Buttons/Button";
import Input from "../Inputs/Input";
import Sucess from "../Sucess/Sucess";
import Error from "../Error/Error";
import FormsText from "../FormsText/FormsText";

const LostForm = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [recovered, setRecovered] = useState(false);

  const resetPassword = async (e) => {
    e.preventDefault();
    if (!email) setError(true);
    setLoading(true);
    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        setLoading(false);
        setError(false);
        setRecovered(true);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
        console.log(err.code);
        setRecovered(false);
      });
  };

  return (
    <FormStyled onSubmit={resetPassword}>
      <FormsText text="Esqueceu a senha?" />
      <Input
        onChange={({ target }) => setEmail(target.value)}
        type="email"
        id="Email"
        placeholder="Insira seu email"
        value={email}
        required
      />

      <Button
        buttonText={loading ? "Carregando..." : "Recuperar senha"}
        disabled={loading ? true : false}
        ctaType="Login"
        type="Submit"
      />
      {!error && recovered && !loading && <Sucess sucessText="Email enviado!" />}
      {error !== null && error.code === "auth/user-not-found" && <Error description="Email não cadastrado."></Error>}
      {error !== null && error.code === "auth/invalid-email" && <Error description="Formato de email inválido"></Error>}
    </FormStyled>
  );
};

export default LostForm;
