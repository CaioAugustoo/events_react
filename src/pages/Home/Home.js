import React from 'react';
import EventsCards from '../../components/EventsCards/EventsCards';
import Navbar from '../../components/Navbar/Navbar';
import { HomeSection } from './style';

const Home = () => {
  document.title = 'Events | Eventos';
  return (
    <HomeSection>
      <Navbar />
      <EventsCards />
    </HomeSection>
  );
};

export default Home;
