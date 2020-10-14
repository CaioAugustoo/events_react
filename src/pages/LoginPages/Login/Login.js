import React from "react";
import { LoginFormSection } from "./style";
import { Container } from "../../../style/GlobalStyle";
import LoginForm from "../../../components/LoginForm/Form";
import Navbar from "../../../components/Navbar/Navbar";

const Login = () => {
  document.title = 'Events | Entrar';
  return (
    <LoginFormSection>
      <Navbar />
      <Container>
        <LoginForm />
      </Container>
    </LoginFormSection>
  );
};

export default Login;
