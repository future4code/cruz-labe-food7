import React, { useContext } from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import useForm from "../../hooks/useForm";
import Card from "@material-ui/core/Card";
import {
  OrderButton,
  CloseButton,
  OrderImage,
  SelectionTitle,
  InputAdd,
} from "./styled";
import Box from "@material-ui/core/Box";
import GlobalStateContext from "../../global/GlobalStateContext";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    padding: "0",
    color: "primary",
  },
}));

export default function CardSelector(props) {
  const {
    setCartQuantity,
    addItemToCart,
    selectedItem,
    setSelectcart,
  } = useContext(GlobalStateContext);
  const [form, onChange, clear] = useForm({ quantidade: "1" });

  const updateQuantity = () => {
    if (form.quantidade > 0) {
      setCartQuantity(form.quantidade);
    }
  };
  const onClickFunction = () => {
    addItemToCart(selectedItem);
    setSelectcart(false);
  };

  return (
    <Card
      style={{
        backgroundColor: "primary",
        width: "250px",
        alignItems: "center",
        position: "fixed",
        top: "150px",
        zIndex: "100",
      }}
    >
      <CloseButton onClick={() => setSelectcart(false)} color={"neutralColor"}>
        X
      </CloseButton>

      <SelectionTitle>Selecione a quantidade desejada</SelectionTitle>

      <Typography
        variant="body2"
        textAlign="center"
        color="textSecondary"
        component="p"
      >
        <Box textAlign="center" m={1}>
          {selectedItem[0].name && selectedItem[0].name}
        </Box>
      </Typography>
      <OrderImage src={selectedItem[0].photoUrl} />

      <br />
      <form>
        <InputAdd
          required
          name="quantidade"
          type="number"
          value={form.quantidade}
          onChange={onChange}
        >
          <option value="1">1</option>
          <option value="2"> 2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </InputAdd>

        {updateQuantity()}
      </form>
      <OrderButton
        onClick={onClickFunction}
        type="submit"
        // fullWidth
        color={"neutralColor"}
        style={{ fontSize: "0.8rem" }}
      >
        ADICIONAR AO CARRINHO{" "}
      </OrderButton>
    </Card>
  );
}
