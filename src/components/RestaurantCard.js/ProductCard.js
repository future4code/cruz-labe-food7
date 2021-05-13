import { makeStyles, Typography } from "@material-ui/core";
import React, { useContext } from "react";
import GlobalStateContext from "../../global/GlobalStateContext";
import {
  ButtonAdd,
  StyledCard,
  CardImgFood,
  InfoItemFood,
  NumberProductsCart,
  ButtonRemove,
  DivNumberCart,
} from "./styled";

const useStyles = makeStyles({});
function ProductCard(props) {
  const classes = useStyles();
  const {
    cart,
    setSelectedItemRemove,
    setSelectedItem,
    setSelectcart,
  } = useContext(GlobalStateContext);

  const selectItemToCart = () => {
    const idRestaurant = [props.prod, props.idRestaurant]
    setSelectcart(true);
    setSelectedItem(idRestaurant);
  };
  const selectRemove = () => {
    setSelectedItemRemove(true);
    setSelectedItem(props.prod);
  };

  const itensFromCart = (newItem) => {
    const index = cart && cart.findIndex((i) => i.id === newItem);
    let newCart = [...cart];
    if (index !== -1) {
      return <NumberProductsCart>{newCart[index].quantity}</NumberProductsCart>;
    } else {
      return <div></div>;
    }
  };

  const buttonAddOrRemove = (newItem) => {
    const index = cart && cart.findIndex((i) => i.id === newItem);
    if (index !== -1) {
      return <ButtonRemove onClick={selectRemove}>{"remover"}</ButtonRemove>;
    } else {
      return <ButtonAdd onClick={selectItemToCart}>{"adicionar"}</ButtonAdd>;
    }
  };

  return (
    <div>
      <StyledCard
        style={{
          boxShadow: "none",
          borderRadius: " 10px ",
          margin: "2%",
        }}
      >
        <CardImgFood src={props.Photo} alt='comida' />

        <InfoItemFood>
          <DivNumberCart> {itensFromCart(props.id)}</DivNumberCart>
          <Typography color='primary' className={classes.title} gutterBottom>
            {props.name}
          </Typography>
          <Typography variant='body2' color='textSecondary'>
            {props.description}
          </Typography>
          <Typography variant='body2' textcolor='primary'>
            R$ {props.price}
          </Typography>

          {buttonAddOrRemove(props.id)}
        </InfoItemFood>
      </StyledCard>
    </div>
  );
}

export default ProductCard;
