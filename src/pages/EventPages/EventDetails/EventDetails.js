import React from "react";
import Navbar from "../../../components/Navbar/Navbar";
import { EventDeitalsSection } from "./style";
import DetailEvent from "../../../components/EventDetail/EventDetail";

const EventDetails = () => {
  return (
    <EventDeitalsSection>
      <Navbar />
      <DetailEvent />
    </EventDeitalsSection>
  );
};

export default EventDetails;
