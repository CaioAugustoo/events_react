import React from 'react';
import { NewEventSection } from './style';
import Navbar from '../../../components/Navbar/Navbar';
import NewEventForm from '../../../components/NewEventForm/NewEventForm';
import { Container } from '../../../style/GlobalStyle';

const NewEvent = () => {
  document.title = 'Events | Publicar evento';
  return (
    <NewEventSection>
      <Navbar />
      <Container>    
        <NewEventForm />
      </Container>
    </NewEventSection>
  );
};

export default NewEvent;
