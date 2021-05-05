import useForm from "../../hooks/useForm";
import {
  Button,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import BASE_URL from "../../constants/urls";
import { useHistory } from "react-router-dom";
import { goToAddressPage } from "../../routes/coordinator";
import axios from "axios";
import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import logo from "../../assets/images/logo-future-eats-invert.svg";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Box from "@material-ui/core/Box";
import GlobalStateContext from "../../global/GlobalStateContext";

export const LogoImage = styled.img`
  width: 40vw;
  max-width: 250px;
`;

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

const SignUpPage = () => {
  const history = useHistory();
  const [form, onChange, clear] = useForm({
    name: "",
    email: "",
    cpf: "",
    password: "",
  });

  const {
    setActualPage
  } = useContext(GlobalStateContext);

  useEffect(() => {
    setActualPage("");
  }, [])

  const onSubmitForm = (event) => {
    event.preventDefault();
    signUp();
  };
  const signUp = () => {
    const axiosConfig = {
      headers: {
        auth: localStorage.getItem("token"),
      },
    };

    axios
      .post(`${BASE_URL}/signup`, form, axiosConfig)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        goToAddressPage(history);
      })
      .catch((error) => {
        console.log(error);
        clear();
      });
  };

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleMouseDownPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <ScreenContainer>
      <LogoImage src={logo} />
      <Box mt={2}>
        <Typography variant="h5">Cadastrar</Typography>
      </Box>
      <InputsContainer>
        <form onSubmit={onSubmitForm}>
          <TextField
            name={"name"}
            value={form.name}
            onChange={onChange}
            label={"Nome"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            required
            type={"username"}
          />
          <TextField
            name={"email"}
            value={form.email}
            onChange={onChange}
            label={"Email"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            required
            type={"email"}
          />
          <TextField
            name={"cpf"}
            value={form.cpf}
            onChange={onChange}
            label={"CPF"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            required
            type={"cpf"}
          />
          <TextField
            name={"password"}
            value={form.password}
            onChange={onChange}
            label={"Senha"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            required
            type={showPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Box mt={2}>
            <Button
              type={"submit"}
              variant={"contained"}
              color={"primary"}
              fullWidth
              margin={"normal"}
            >
              Criar
            </Button>
          </Box>
        </form>
      </InputsContainer>
    </ScreenContainer>
  );
};

export default SignUpPage;
