import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  mainGray,
  primaryColor,
} from '../../../constants/colors'
import {
    DivPadding,
    DivAdress,
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

const RestaurantDetails = () => {
    const classes = useStyles();
    
    return (

    <DivPadding>
        <Typography className={classNames(classes.primaryColor, classes.font16)}  
            component='p'
        > Bullguer Vila Madalena
        </Typography>
        <Typography className={classNames(classes.mainGray, classes.font16)}  
            component='p'
        > R. Fradique Coutinho, 1136 - Vila Madalena
        </Typography>
        <Typography className={classNames(classes.mainGray, classes.font16)}  
            component='p'
        > 30 - 45 min
        </Typography>
    </DivPadding>
    )
}

export default RestaurantDetails