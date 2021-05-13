import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import styled from "styled-components";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const OrdersCard = (props) => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  function dataDoPedido(data){
    const dia = data.getDate().toString().padStart(2, "0")
    const mes = (data.getMonth()+1).toString().padStart(2, "0")
    const ano = data.getFullYear();
    return `${dia}/${mes}/${ano}`
  }

  return (
      <CardsOrdes>
        <Name>{props.restaurantName}</Name>
        <Created>{dataDoPedido(new Date(props.createdAt))}</Created>
        <Price>SUBTOTAL R${props.totalPrice}</Price>
      </CardsOrdes>
  );
}

    export default OrdersCard;

const CardsOrdes = styled.div`
    border: solid 1px rgba(0, 0, 0, 0.5);
    padding: 10px;
    border-radius: 10px;
    margin: 10px;
`
const Name = styled.p`
    color: #ffa284;
    font-size: 27px;
    margin: 10px;
`
const Created = styled.p`
    margin: 10px;
`
const Price = styled.h3`
    margin: 10px;
`