import React, {useContext} from "react";
import { makeStyles } from "@material-ui/core/styles";
import GlobalStateContext from "../../../global/GlobalStateContext";
import { Typography } from "@material-ui/core"
import classNames from 'classnames'
import {
  DivPadding,
  BoxPrices,
  DivSubtotal,
  DivTotal
} from '../styled'
import {
  mainGray,
  primaryColor,
} from '../../../constants/colors'

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
  bold: {
    fontWeight: 'bold',  
  },
  font18: {
    fontSize: '18px',
  },
  font16: {
    fontSize: '16px',
    lineHeight: '25px',
  },
  font14: {
    fontSize: '4px',
    lineHeight: '20px',
  },
}));

const Total = (props) => {
    const classes = useStyles()

    const {
      cart
    } = useContext(GlobalStateContext);

    var subTotal = 0
    var total = 0

    if(cart.length > 0) {
      for( var product in cart) {
        subTotal = subTotal + (parseFloat(cart[product].price)*cart[product].quantity)
      } 
      total = subTotal + props.shipping
    }

    return (

    <DivPadding $padding='0px 20px 20px 20px'> 
            <BoxPrices>
            
              <DivSubtotal>
                <Typography className={classNames(classes.blackColor, classes.font16)}  
                    component='p'
                  > Subtotal R${subTotal}
                </Typography>
              
              
                <Typography className={classNames(classes.blackColor, classes.font16)}  
                    component='p'
                  > Frete R${props.shipping ? props.shipping : '0'}
                </Typography>
              </DivSubtotal>

              <DivTotal> 
                <Typography className={classNames(classes.primaryColor, classes.font18, classes.bold)}  
                    component='p'
                  > Total
                </Typography>

                <Typography className={classNames(classes.primaryColor, classes.font18, classes.bold)}  
                    component='p'
                  > R${total}
                </Typography>

              </DivTotal>
                
  
            </BoxPrices>
          </DivPadding>
    )
}

export default Total