import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FormStyled} from '../NewEventForm/style';
import firebase from "../../config/firebase";
import "firebase/auth";
import Button from "../Buttons/Button";
import Input from "../Inputs/Input";
import Error from '../Error/Error';
import FormsText from "../FormsText/FormsText";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [logged, setLogged] = useState(false);
  const navigate = useNavigate();

  const UserlogIn = async (e) => {
    e.preventDefault();
    if(!email && !password){
      setLoading(false);
      setError(true);
    }
    setLoading(true);
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        localStorage.setItem('Auth', true);
        setLoading(false);
        setLogged(true);
        navigate("/account");
      })
      .catch((err) => {
        setError(err);
        setLogged(false);
        setLoading(false);
        localStorage.removeItem('Auth');
      });
  };

  return (
    <FormStyled onSubmit={UserlogIn}>
      <FormsText text="Cadastro" />
      <Input
        onChange={({ target }) => setEmail(target.value)}
        type="email"
        id="Email"
        placeholder="Insira um email"
        value={email}
        required
      />
      <Input
        onChange={({ target }) => setPassword(target.value)}
        type="password"
        id="Senha"
        placeholder="Insira uma senha"
        value={password}
        required
      />

      <div className="d-flex" style={{ flexDirection: "column" }}>
        <Button
          buttonText={loading ? "Carregando..." : "Cadastrar"}
          ctaType="Login"
          type="Submit"
          onClick={UserlogIn}
          disabled={loading ? true : false}
        />
        <Link to="/login">
          <Button
            buttonText="Já possui uma conta?"
            ctaType="SignUp"
            type="Button"
          />
        </Link>
      </div>

      {!logged && error.code === "auth/email-already-in-use" && <Error description="O email inserido já está em uso."></Error>}
      {!logged && error.code === "auth/invalid-email" && <Error description="Insira um formato válido de email."></Error>}
      {!logged && error.code === "auth/weak-password" && <Error description="Senha deve conter ao menos 6 caracteres."></Error>}
    </FormStyled>
  );
};

export default SignUpForm;
