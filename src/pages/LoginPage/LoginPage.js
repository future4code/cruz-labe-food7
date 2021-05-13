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
import { goToSignUpPage, goToHomePage } from "../../routes/coordinator";
import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import AlertModified from "../../components/Alert";
import GlobalStateContext from "../../global/GlobalStateContext";
import { useContext } from "react";
import logo from "../../assets/images/logo-future-eats-invert.svg";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Box from "@material-ui/core/Box";


export const LogoImage = styled.img`
  width: 40vw;
  max-width: 250px;
`;

export const ScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  margin-top: 10vh;
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  max-width: 450px;
  align-items: center;
  margin-bottom: 20px;
`;

const LoginPage = () => {
  const history = useHistory();
  const [form, onChange, clear] = useForm({ email: "", password: "" });

  const { setOpenAlert, setAlertMsg, setAlertSeverity } = useContext(
    GlobalStateContext
  );

  const onSubmitForm = (event) => {
    event.preventDefault();
    login();
  };

  const login = () => {
    const axiosConfig = {
      headers: {
        auth: localStorage.getItem("token"),
      },
    };

    axios
      .post(`${BASE_URL}/login`, form, axiosConfig)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        goToHomePage(history);
      })
      .catch((error) => {
        setAlertMsg(error.response.data.message);
        setAlertSeverity("error");
        setOpenAlert(true);
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
    <>
      <ScreenContainer>
        <LogoImage src={logo} />
        <Box mt={2}>
          <Typography variant="h5">Entrar</Typography>
        </Box>
        <InputsContainer>
          <form onSubmit={onSubmitForm}>
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
              placeholder={"email@email.com"}
            />

            <TextField
              name={"password"}
              value={form.password}
              onChange={onChange}
              label={"Senha"}
              variant={"outlined"}
              fullWidth
              margin={"normal"}
              placeholder={"Mínimo 6 caracteres"}
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
            <Box mt={2} mb={2}>
              <Button
                type={"submit"}
                variant={"contained"}
                color={"primary"}
                fullWidth
                margin={"normal"}
              >
                Entrar
              </Button>
            </Box>
            <Button
              onClick={() => goToSignUpPage(history)}
              type={"submit"}
              color={"primary"}
              fullWidth
              margin={"normal"}
            >
             Não possui cadastro? Clique aqui.
            </Button>
          </form>
        </InputsContainer>
        <AlertModified />
      </ScreenContainer>
    </>
  );
};

export default LoginPage;
