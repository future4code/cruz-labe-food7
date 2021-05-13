import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import {
  DivDetailsRestaurant,
  StyledCardContent,
  StyledTypographyTime,
} from "./styled";

const useStyles = makeStyles({
  media: {
    height: 130,
    width: "100%",
  },
  title: {
    color: "#E86E5A",
  },
});

export default function RestaurantCardDetails(props) {
  const classes = useStyles();
  const time2 = Number(props.deliveryTime) + 10;
  return (
    <Card
      style={{
        border: "none",
        boxShadow: "none",
        borderRadius: " 12px 12px 0px 0px",
        margin: "2%",
      }}
    >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          component="img"
          alt={props.name}
          image={props.logoUrl}
          title={props.name}
        />
        <StyledCardContent>
          <Typography className={classes.title} gutterBottom variant="h5">
            {props.name}
          </Typography>
          <DivDetailsRestaurant>
            <Typography variant="body2" color="textSecondary">
              {props.category}
            </Typography>
            <StyledTypographyTime variant="body2" component={'div'} color="textSecondary">
              <div>
                {props.deliveryTime} - {time2} min
              </div>{" "}
              <div> Frete R${props.shipping}</div>
            </StyledTypographyTime>

            <Typography variant="body2" color="textSecondary">
              {props.address}
            </Typography>
          </DivDetailsRestaurant>
        </StyledCardContent>
      </CardActionArea>
    </Card>
  );
}
