import React, { useContext} from "react";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import {
  OrderButton,
  CloseButton,
  OrderImage,
  SelectionTitle,
} from "./styled";
import Box from "@material-ui/core/Box";
import GlobalStateContext from "../../global/GlobalStateContext";


export default function CardRemove(props) {
  const {
    removeItemFromCart,
    setSelectedItemRemove,
    selectedItem,
  } = useContext(GlobalStateContext);

  const onClickRemove = () => {
    removeItemFromCart(selectedItem);
    setSelectedItemRemove(false);
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
      <CloseButton onClick={() =>  setSelectedItemRemove(false)} color={"neutralColor"}>
        X
      </CloseButton>

      <SelectionTitle>Excluir do pedido </SelectionTitle>

      <Typography
        variant='body2'
        color='textSecondary'
        component='div'
      >
        <Box textAlign='center' m={1}>
          {selectedItem.name}
        </Box>
      </Typography>
      <OrderImage src={selectedItem.photoUrl} />

      <br />

      <OrderButton
        onClick={onClickRemove}
        color={"neutralColor"}
        style={{ fontSize: "0.8rem" }}
      >
        REMOVER DO CARRINHO{" "}
      </OrderButton>
    </Card>
  );
}
