import React, {useEffect, useState} from "react"
import axios from 'axios'
import { makeStyles } from "@material-ui/core/styles"
import BASE_URL from "../../../constants/urls";
import {
  mainGray,
  primaryColor,
} from '../../../constants/colors'
import {
    DivPadding,
    DivAddress,
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

const AddressBox = () => {
    const classes = useStyles();

    const [fullAddress, setFullAddress] = useState([]);

    useEffect(() => {
      getFullAddress()
    }, []);

    const getFullAddress = () => {
    axios
      .get(`${BASE_URL}/profile/address`, {
        headers: {
          auth: localStorage.getItem('token'),
        }
      })
      .then((response) => {
        setFullAddress(response.data.address)
      })
      .catch((error) =>  {      
      })
    }
    
    return (
        <DivAddress>
            <DivPadding>
                <Typography className={classNames(classes.mainGray, classes.font16)}  
                  component='p'
                > Endereço de entrega
                </Typography>
              
              <Typography className={classes.font16}
                  component='p'
                > {fullAddress.street}, {fullAddress.number} - {fullAddress.neighbourhood}
              </Typography>
            </DivPadding>
        </DivAddress>
    )
}

export default AddressBox
  