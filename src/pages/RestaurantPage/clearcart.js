import React, { useContext } from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
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
import { primaryColor } from "../../constants/colors";
import styled from "styled-components";

export default function ClearCart(props) {
  const {
    addItemToCart,
    selectedItem,
    setSelectcart,
    setCardClearCart,
    setCart,
  } = useContext(GlobalStateContext);

  const onClickRemove = () => {
    setCart([]);
    addItemToCart(selectedItem);
  };
  const onClickCancel = () => {
    setCardClearCart(false);
  };

  return (
    <div
      style={{
        backgroundColor: "#f0eded",
        width: "100vw",
        position: "fixed",
        bottom: "46px",
        zIndex: "100",
    
      }}
    >
      <ClearText>
       <p>Você só pode adicionar itens de um restaurante por vez.</p>
       <br/>
        <p> Deseja esvaziar o carrinho ?</p>
      </ClearText>
      <ButtonClearCart onClick={onClickRemove}>
        Esvaziar minha sacola
      </ButtonClearCart>
      <ButtonCancelClear onClick={onClickCancel}>Cancelar</ButtonCancelClear>
    </div>
  );
}

const ClearText = styled.div`
  padding:30px;
  width:100vw;
  height:40px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  p {
      margin:0px;
      padding-left:15%;
 
  }
`;
const ButtonClearCart = styled.button`
  width: 90vw;
  margin: 0 5vw ;
  border-radius:4px;
  border:none;
  font-size:1rem;
  padding:3%;
  color: white;
  cursor: pointer;
  background-color: ${primaryColor};
`;

const ButtonCancelClear = styled.button`
  width: 100vw;
  border:none;
  font-size:1.1rem;
  padding:3%;
  color: ${primaryColor};
  cursor: pointer;
  background-color: transparent;
`;
