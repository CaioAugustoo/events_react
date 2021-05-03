import React, { useState, useEffect } from "react";
import { FormStyled } from "./style";
import firebase from "../../config/firebase";
import Button from "../Buttons/Button";
import Input from "../Inputs/Input";
import Select from "../Select/Select";
import TextArea from "../TextArea/TextArea";
import FormsText from "../FormsText/FormsText";
import Sucess from "../Sucess/Sucess";
import Error from "../Error/Error";
import { useNavigate } from "react-router-dom";

const NewEventForm = () => {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState("");
  const [adress, setAdress] = useState('');
  const [option, setOption] = useState('');
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [created, setCreated] = useState(false);
  const eventRef = firebase.firestore().collection("eventos").doc();
  const isLoggedIn = localStorage.getItem("Auth");
  const [logged, setLogged] = useState(isLoggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate(`/login/signup`);
      setLogged(false);
    };
  }, [logged, isLoggedIn, navigate]);

  const UserPost = (e) => {
    e.preventDefault();
    setLoading(true);
    eventRef
      .set({
        eventTitle: title,
        eventType: option,
        eventDescription: description,
        eventTime: time,
        eventDate: date,
        eventAdress: adress,
        eventViews: 0,
        eventIsPublic: 1,
      })
      .then(() => {
        setCreated(true);
        setError(false);
        setLoading(false);
      })
      .catch(err => {
        setCreated(false);
        setError(err);
        setLoading(false);
      });
  };

  return (
    <FormStyled onSubmit={UserPost}>
      <FormsText text="Dados" />
        <Input
        id="Titulo"
        type="text"
        placeholder='Ex: "Evento na casa da Maria"'
        required
        onChange={({ target }) => setTitle(target.value)}
        value={title}
      />
      <TextArea
        text="Descrição do evento"
        rows="3"
        placeholder='Ex: "Este evento não tem tempo para acabar"'
        required
        onChange={({ target }) => setDescription(target.value)}
        value={description}
      />
      <Input
        id="Endereço"
        type="text"
        placeholder='Ex: "Rua Ali Perto, Qd.1 Lt.5"'
        required
        onChange={({ target }) => setAdress(target.value)}
        value={adress}
      />
      <Select
        text="Categoria do evento"
        options={["Festa", "Show", "Teatro", "Outro"]}
        required
        onChange={({ target }) => setOption(target.value)}
        value={option}
      />
      <Input
        id="Horário"
        type="time"
        required
        onChange={({ target }) => setTime(target.value)}
        value={time}
      />
      <Input
        id="Data"
        type="date"
        required
        onChange={({ target }) => setDate(target.value)}
        value={date}
      />
      <Button
        ctaType="Login"
        buttonText={loading ? "Carregando..." : "Publicar evento"}
        disabled={loading ? true : false}
        type="submit"
        onClick={UserPost}
      />
      {!loading && error && (
        <Error description="Erro ao criar um evento. Verifique se os campos foram preenchidos corretamente."></Error>
      )}
      {!loading && !error && created && (
        <Sucess sucessText="Evento publicado com sucesso! :)" />
      )}
    </FormStyled>
  );
};

export default NewEventForm;
