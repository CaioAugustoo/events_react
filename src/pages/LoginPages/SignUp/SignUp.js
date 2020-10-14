import React from 'react';
import { LoginFormSection } from "../Login/style";
import { Container } from "../../../style/GlobalStyle";
import SignUpForm from '../../../components/SignUpForm/Form';
import Navbar from '../../../components/Navbar/Navbar';

const SignUp = () => {
  document.title = 'Events | Registrar';
  return (
    <LoginFormSection>
      <Navbar />
      <Container>
        <SignUpForm />
      </Container>
    </LoginFormSection>
  );
};

export default SignUp;
