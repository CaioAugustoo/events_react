import React from 'react';
import { LoginFormSection } from "../Login/style";
import { Container } from "../../../style/GlobalStyle";
import LostForm from '../../../components/LostForm/LostForm';
import Navbar from '../../../components/Navbar/Navbar';

const Lost = () => {
  document.title = 'Events | Redefinir senha';
  return (
    <LoginFormSection>
      <Navbar />
      <Container>
        <LostForm />
      </Container>
    </LoginFormSection>
  );
};

export default Lost;
