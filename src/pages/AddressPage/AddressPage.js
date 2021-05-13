import useForm from "../../hooks/useForm";
import { Button, TextField, Typography } from "@material-ui/core";
import BASE_URL from "../../constants/urls";
import { useHistory } from "react-router-dom";
import { goToHomePage } from "../../routes/coordinator";
import axios from "axios";
import React from "react";
import styled from "styled-components";
import AlertModified from "../../components/Alert";
import GlobalStateContext from "../../global/GlobalStateContext";
import { useContext, useEffect } from "react";
import Box from "@material-ui/core/Box";

export const ScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  margin-top: 3vh;
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  max-width: 450px;
  align-items: center;
  margin-bottom: 20px;
`;

const AddressPage = () => {
  const history = useHistory();
  const [form, onChange, clear] = useForm({
    street: "",
    number: "",
    neighbourhood: "",
    city: "",
    state: "",
    complement: "",
  });

  const {
    setOpenAlert,
    setAlertMsg,
    setAlertSeverity,
    setActualPage,
    setBack
  } = useContext(GlobalStateContext);

  const onSubmitForm = (event) => {
    event.preventDefault();
    getAddress(form, clear, history);
  };

  useEffect(() => {
    setActualPage("");
    setBack(false);
  }, [])


  const getAddress = (form, clear, history) => {
    const axiosConfig = {
      headers: {
        auth: localStorage.getItem("token"),
      },
    };
    axios
      .put(`${BASE_URL}/address`, form, axiosConfig)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        goToHomePage(history);
        clear();
      })
      .catch((error) => {
        setAlertMsg(error.response.data.message);
        setAlertSeverity("error");
        setOpenAlert(true);
      });
  };

  return (
    <ScreenContainer>
      <Typography variant="h5">Meu Endereço</Typography>
      <InputsContainer>
        <form onSubmit={onSubmitForm}>
          <TextField
            name={"street"}
            value={form.street}
            onChange={onChange}
            label={"Logradouro"}
            placeholder={"Rua / Av."}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            required
            type={"street"}
          />
          <TextField
            name={"number"}
            value={form.number}
            onChange={onChange}
            label={"Número"}
            placeholder={"Número"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            required
            type={"number"}
          />
          <TextField
            name={"complement"}
            value={form.complement}
            onChange={onChange}
            label={"Complemento"}
            placeholder={"Apto / Bloco"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            type={"complement"}
          />
          <TextField
            name={"neighbourhood"}
            value={form.neighbourhood}
            onChange={onChange}
            label={"Bairro"}
            placeholder={"Bairro"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            required
            type={"neighbourhood"}
          />
          <TextField
            name={"city"}
            value={form.city}
            onChange={onChange}
            label={"Cidade"}
            placeholder={"Cidade"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            required
            type={"city"}
          />
          <TextField
            name={"state"}
            value={form.state}
            onChange={onChange}
            label={"Estado"}
            placeholder={"Estado"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            required
            type={"state"}
          />
          <Box mt={2}>
            <Button
              type={"submit"}
              variant={"contained"}
              color={"primary"}
              fullWidth
              margin={"high"}
            >
              Salvar
            </Button>
          </Box>
        </form>
      </InputsContainer>
      <AlertModified />
    </ScreenContainer>
  );
};

export default AddressPage;
