import React, { useContext, useEffect } from 'react'
import GlobalStateContext from '../../global/GlobalStateContext';
import useProtectedPage from '../../hooks/useProtectedPage'
import { InputsContainer, ScreenContainer } from "./styled"
import {goToProfile} from '../../routes/coordinator'
import { TextField } from "@material-ui/core"
import { useHistory } from "react-router-dom"
import Button from '@material-ui/core/Button'
import BASE_URL from '../../constants/urls'
import useForm from '../../hooks/useForm'
import axios from 'axios'

const EditAddressPage = () => {
    const history = useHistory();
    const [form, onChange, setForm] = useForm({ street: "", number: "", neighbourhood: "", city: "", state: "", complement: ""})
    useProtectedPage();

    const {
      setActualPage,
      setBack,
    } = useContext(GlobalStateContext);

    useEffect(() => {
      setBack(true)
      setActualPage("Endereço")
        axios
          .get(`${BASE_URL}/profile/address`, {
            headers: {
              auth: localStorage.getItem("token"),
            },
          })
          .then((res) => {
            setForm(res.data.address);
          })
          .catch((error) => {
            window.alert(error.message);
          });
      }, []);

      const editProfile = (event) => {
        event.preventDefault()
        edit()
      }

      const edit = () => {
        const axiosConfig = {
          headers: {
            auth: localStorage.getItem('token')
          }
        }
        axios.put(`${BASE_URL}/address`, form, axiosConfig).then(response => {
          goToProfile(history)
        }).catch(error => {
          window.alert(error.message);
        })
      }
    return(
        <ScreenContainer>
            <InputsContainer>
            <form onSubmit={editProfile}>
                    <TextField
                        name={"street"}
                        value={form.street}
                        onChange={onChange}
                        label={"Street"}
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
                        label={"Number"}
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
                        label={"Complement"}
                        variant={"outlined"}
                        fullWidth
                        margin={"normal"}
                        type={"complement"}
                    />
                    <TextField
                        name={"neighbourhood"}
                        value={form.neighbourhood}
                        onChange={onChange}
                        label={"Neighbourhood"}
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
                        label={"City"}
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
                        label={"State"}
                        variant={"outlined"}
                        fullWidth
                        margin={"normal"}
                        required
                        type={"state"}
                    />
                <Button
                type={"submit"}
                variant={"contained"}
                color={"primary"}
                fullWidth
                margin={"normal"}>
                Save
                 </Button>
            </form>
        </InputsContainer>
      </ScreenContainer>
    )
}

export default EditAddressPage;
