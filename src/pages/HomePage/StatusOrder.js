import React from "react";
import styled from 'styled-components'
import { makeStyles } from "@material-ui/core/styles"
import { HideScroll } from 'react-hide-on-scroll'
import classNames from 'classnames'
import {
    primaryColor,
    mainGray
  } from '../../constants/colors'
import clock from '../../assets/images/clock.svg'
import { Typography } from "@material-ui/core"


  const useStyles = makeStyles((theme) => ({

    primaryColor: {
      color: [primaryColor],
    },
    whiteColor: {
        color: 'white',
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

const PinkBox = styled.div` 
    height: 20vh;
    width: 100%;
    background-color: ${primaryColor};
    position: fixed;
    top: 72vh;
    z-index: 22;
    display: flex;
    align-items: center;
` 

const Margin = styled.div` 
    margin: 20px;
    display: flex;
` 

const IconDiv = styled.div`
    display: flex;
    align-items: center;
` 

const InfosDiv = styled.div` 
`

const Icon = styled.img` 
    height: 6vh;
    margin-right: 20px;
`

const StatusOrder = (props) => {
    const classes = useStyles();



    return (
        <HideScroll variant="down">
            <PinkBox>
                <Margin> 
                    <IconDiv>
                        <Icon src={clock}/> 
                    </IconDiv>

                    <InfosDiv>
                        <Typography className={classNames(classes.whiteColor, classes.font16)}  
                            component='p'
                                > Pedido em andamento
                        </Typography>

                        <Typography className={classNames(classes.blackColor, classes.font16)}  
                            component='p'
                                > {props.activeOrder.restaurantName}
                        </Typography>

                        <Typography className={classNames(classes.blackColor, classes.font16, classes.bold)}  
                            component='p'
                                > R${props.activeOrder.totalPrice}
                        </Typography>

                    </InfosDiv>
                

                </Margin>
                
            </PinkBox>
        </HideScroll>
    )
}

export default StatusOrder

