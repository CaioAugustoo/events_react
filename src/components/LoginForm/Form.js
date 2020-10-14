import React, { useState, useEffect } from "react";
import { FormStyled} from '../NewEventForm/style';
import { Link, useNavigate } from "react-router-dom";
import firebase from "../../config/firebase";
import "firebase/auth";
import Button from "../Buttons/Button";
import Input from "../Inputs/Input";
import Error from '../Error/Error';
import FormsText from "../FormsText/FormsText";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('Auth');

  useEffect(() => {
    if (isLoggedIn) navigate('/');
  }, [isLoggedIn, navigate]);

  const userlogIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        localStorage.setItem('Auth', true);
        setLoading(false);
        navigate("/");
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
        localStorage.removeItem('Auth');
      });
  };

  return (
    <FormStyled onSubmit={userlogIn}>
      <FormsText text="Login" />
      <Input
        onChange={({ target }) => setEmail(target.value)}
        type="email"
        id="Email"
        placeholder="Insira seu email"
        value={email}
        required
      />
      <Input
        onChange={({ target }) => setPassword(target.value)}
        type="password"
        id="Senha"
        placeholder="Insira sua senha"
        value={password}
        required
      />
      <Link to="/login/lost">Esqueceu a senha?</Link>
      <div className="d-flex" style={{ flexDirection: "column" }}>
        <Button
          buttonText={loading ? "Carregando..." : "Entrar"}
          ctaType="Login"
          type="Submit"
          onClick={userlogIn}
          disabled={loading ? true : false}
        />
        <Link to="/login/signup">
          <Button buttonText="Cadastre-se" ctaType="SignUp" type="Submit" />
        </Link>    
      </div>

      {error.code === "auth/invalid-email" && <Error description="Insira um formato válido de email."></Error>}
      {error.code === "auth/wrong-password" && <Error description="A senha inserida está incorreta."></Error>}
      {error.code === "auth/user-not-found" && <Error description="Email ou senha inválidos."></Error>}
      {error.code === "auth/too-many-requests" && <Error description="Devido a muitas tentativas de login, esta conta está temporariamente banida."></Error>}
    </FormStyled>
  );
};

export default LoginForm;
