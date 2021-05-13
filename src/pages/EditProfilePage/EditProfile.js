import React, { useContext, useEffect } from "react";
import GlobalStateContext from "../../global/GlobalStateContext";
import useProtectedPage from "../../hooks/useProtectedPage";
import { InputsContainer, ScreenContainer } from "./styled";
import { goToProfile } from "../../routes/coordinator";
import { TextField } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import BASE_URL from "../../constants/urls";
import useForm from "../../hooks/useForm";
import axios from "axios";

const EditProfilePage = () => {
  const history = useHistory();
  const [form, onChange, setForm] = useForm({
    name: "",
    email: "",
    cpf: "",
  });
  useProtectedPage();

  const {
    setActualPage,
    setBack,
  } = useContext(GlobalStateContext);

  useEffect(() => {
    setBack(true);
    setActualPage("Editar");
    axios
      .get(`${BASE_URL}/profile`, {
        headers: {
          auth: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setForm(res.data.user);
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }, []);

  const editProfile = (event) => {
    event.preventDefault();
    edit();
  };

  const edit = () => {
    const axiosConfig = {
      headers: {
        auth: localStorage.getItem("token"),
      },
    };
    axios
      .put(`${BASE_URL}/profile`, form, axiosConfig)
      .then((response) => {
        goToProfile(history);
      })
      .catch((error) => {
        window.alert(error.message);
      });
  };
  return (
    <ScreenContainer>
      <InputsContainer>
        <form onSubmit={editProfile}>
          <TextField
            name={"name"}
            value={form.name}
            onChange={onChange}
            label={"Name"}
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
            label={"Cpf"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            required
            type={"cpf"}
          />
          <Button
            type={"submit"}
            variant={"contained"}
            color={"primary"}
            fullWidth
            margin={"normal"}
          >
            Save
          </Button>
        </form>
      </InputsContainer>
    </ScreenContainer>
  );
};

export default EditProfilePage;
