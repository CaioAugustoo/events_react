import React, { useState, useEffect } from "react";
import firebase from "../../config/firebase";
import {
  Wrapper,
  CardStyled,
  CardTitle,
  CardType,
  CardDescription,
  CardInfos,
  CardTime,
  CardDate,
  CardViews,
} from "./style";
import TimeIcon from "../../assets/svg/time.svg";
import DateIcon from "../../assets/svg/date.svg";
import ViewsIcon from "../../assets/svg/views.svg";
import { Container } from "../../style/GlobalStyle";
import { Link, useLocation } from "react-router-dom";
import Loader from "../Loader/Loader";
import SearchBar from "../SearchBar/SearchBar";

const EventsCards = ({ match }) => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const isLoggedIn = localStorage.getItem("Auth");
  const [logged, setLogged] = useState(isLoggedIn);
  const [search, setSearch] = useState("");
  const { pathname } = useLocation();
  const allEvents = [];

  useEffect(() => {
    if (isLoggedIn) setLogged(true);
  }, [logged, isLoggedIn]);

  useEffect(() => {
    setLoading(true);
    firebase
      .firestore()
      .collection("eventos")
      .get()
      .then(async (result) => {
        await result.docs.forEach((doc) => {
          if (doc.data().eventTitle.indexOf(search) >= 0) {
            allEvents.push({
              id: doc.id,
              ...doc.data(),
            });
          }
        });
        setEvents(allEvents)
        setLoading(false);
      });
  }, [search, pathname]);

  if(events === null) return null;
  return (
    <Container>
      <SearchBar
        placeholder='Procure por um evento. Ex: "Encontro com os amigos"'
        onChange={({ target }) => setSearch(target.value)}
        value={search}
      />
      <Wrapper>
        {events.map((event, index) => (
          <Link to={`/event/${event.id}`} key={index}>
            <CardStyled key={event.id}>
              <div>
                <CardTitle>{event.eventTitle}</CardTitle>
                <CardType>{event.eventType}</CardType>
              </div>

              <CardDescription>{event.eventDescription}</CardDescription>

              <CardInfos>
                <CardTime>
                  <img src={TimeIcon} alt="Time" />
                  <p>{event.eventTime}</p>
                </CardTime>

                <CardDate>
                  <img src={DateIcon} alt="Date" />
                  <p>{event.eventDate}</p>
                </CardDate>

                <CardViews>
                  <img src={ViewsIcon} alt="Views" />
                  <p>{event.eventViews}</p>
                </CardViews>
              </CardInfos>
            </CardStyled>
          </Link>
        ))}
        {loading && <Loader />}
        {!loading && events.length === 0 && (
          <h1 style={{ color: "var(--primary-lightness)" }}>
            Nenhum evento encontrado.{" "}
            <Link to={logged ? `/events/post` : `/login/signup`}>
              <p style={{ color: "var(--first-orange)", textAlign: "center" }}>
                Publique um!
              </p>
            </Link>
          </h1>
        )}
      </Wrapper>
    </Container>
  );
};

export default EventsCards;
