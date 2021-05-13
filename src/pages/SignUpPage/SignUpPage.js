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
import AlertModified from "../../components/Alert";


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
  const { setOpenAlert, setAlertMsg, setAlertSeverity } = useContext(
    GlobalStateContext
  );

  const [form, onChange, clear, setForm] = useForm({

    name: "",
    email: "",
    cpf: "",
    password: "",
  });


  const [confirmPassword, setConfirmPassword] = useState(true)

  const onChangeConfirmPassword = (event) => {
    if (event.target.value === form.password) {
      setConfirmPassword(true)
    } else {
      setConfirmPassword(false)

    }
  };

  const {
    setActualPage,
    setBack
  } = useContext(GlobalStateContext);




  useEffect(() => {
    setActualPage("");
    setBack(true);
  }, []);

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

  const formatCpf = (event) => {
    let cpfInput = event.target.value
      .replace(/\D/g, "")
      .replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "$1.$2.$3-$4");

    if (cpfInput.length > 14) {
      return;
    }

    setForm({ ...form, cpf: cpfInput });
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
            onChange={formatCpf}
            label={"Cpf"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            required
            type={"text"}
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
          <TextField
            name={"confirmPassword"}
            onChange={onChangeConfirmPassword}
            label={"Confirmar senha"}
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
          {!confirmPassword ?
            <small>As senhas não correspondem</small> : ''}
          <Box mt={2}>
            <Button
              disabled={!confirmPassword}
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
      <AlertModified />
    </ScreenContainer>
  );
};

export default SignUpPage;
