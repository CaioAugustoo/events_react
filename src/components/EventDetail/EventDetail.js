import React, { useState, useEffect } from "react";
import TimeIcon from "../../assets/svg/time.svg";
import DateIcon from "../../assets/svg/date.svg";
import ViewsIcon from "../../assets/svg/views.svg";
import AdressIcon from "../../assets/svg/adress.svg";
import firebase from "../../config/firebase";
import { useParams } from "react-router-dom";
import {
  Wrapper,
  EventDetail,
  EventTitle,
  EventDescription,
  CardInfos,
  CardTime,
  CardDate,
  CardViews,
  EventAdress,
} from "./style";
import Loader from "../Loader/Loader";

const DetailEvent = () => {
  const [loading, setLoading] = useState(false);
  const [event, setEvent] = useState([]);
  const { id } = useParams();

  useEffect(() => {
      firebase
      .firestore()
      .collection("eventos")
      .doc(id)
      .get()
      .then((result) => {
        setEvent(result.data());
        firebase
        .firestore()
        .collection("eventos")
        .doc(id)
        .update('eventViews', result.data().eventViews + 1)
        
      });
  }, [id]);
  if (event === null) return null;
  return (
    <Wrapper>
        <EventDetail>
          <EventTitle>{event.eventTitle}</EventTitle>

          <EventDescription>{event.eventDescription}</EventDescription>

          <CardInfos>
            <CardTime>
              <img src={TimeIcon} alt="Time" />
              <p>{event.eventTime}</p>
            </CardTime>

            <CardDate>
              <img src={DateIcon} alt="Date" />
              <p>{event.eventDate}</p>
            </CardDate>

            <EventAdress>
              <img src={AdressIcon} alt="Adress" />
              <p>{event.eventAdress}</p>
            </EventAdress>

            <CardViews>
              <img src={ViewsIcon} alt="Views" />
              <p>{event.eventViews}</p>
            </CardViews>
          </CardInfos>
        </EventDetail>
        {loading && <Loader />}
    </Wrapper>
  );
};

export default DetailEvent;
