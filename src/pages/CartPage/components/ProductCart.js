import React, {useContext } from "react";
import GlobalStateContext from "../../../global/GlobalStateContext";
import { makeStyles } from "@material-ui/core/styles";
import {
  mainGray,
  primaryColor,
} from '../../../constants/colors'
import {
    DivPadding,
    BoxProduct,
    ProductImg,
    BoxQuantity,
    BoxInfos,
    RemoveButton,
  } from '../styled'
  import { Typography } from "@material-ui/core"
  import classNames from 'classnames'
  

  const useStyles = makeStyles((theme) => ({

    primaryColor: {
      color: [primaryColor],
    },
  
    blackColor: {
      color: 'black',
    },
    mainGray: {
      color: [mainGray],
    },
    font16: {
      fontSize: '16px',
      lineHeight: '25px',
    },
    font14: {
      fontSize: '14px',
      lineHeight: '20px',
    },
  }));


const ProductCart = (props) => {
  const classes = useStyles();

  const {
    removeItemFromCart
  } = useContext(GlobalStateContext);

    return (
        <DivPadding $padding='0px 20px 20px 20px'>
        <BoxProduct>

          <BoxQuantity>
            <Typography className={classes.primaryColor}  
              component='p'
            > {props.product.quantity}
            </Typography>
          </BoxQuantity>
          
        
          <ProductImg src={props.product.photoUrl}/>

          <DivPadding $padding='20px 20px 20px 20px'> 
            <BoxInfos>
                <Typography className={classNames(classes.primaryColor, classes.font16)}   
                  component='p'
                > {props.product.name}
                </Typography>

                <Typography className={classNames(classes.mainGray, classes.font14)}   
                  component='p'
                > {props.product.description}
                </Typography>

                <Typography className={classNames(classes.blackColor, classes.font16)}   
                  component='p'
                > R${props.product.price}
                </Typography>
            </BoxInfos>
          </DivPadding>
          <RemoveButton onClick={() => removeItemFromCart(props.product)}>Remover</RemoveButton>
        </BoxProduct>

      </DivPadding>

    );
  }

export default ProductCart