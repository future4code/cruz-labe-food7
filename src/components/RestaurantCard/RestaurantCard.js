import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import { useHistory } from "react-router";
import { goToRestaurantPage } from "../../routes/coordinator";

const DivDetalhes = styled.div`
  display: flex;
  justify-content: space-between;
`;

const useStyles = makeStyles({
  media: {
    height: 150,
    width: "100%",
  },
  title: {
    color: "#E86E5A",
  },
});

export default function RestaurantCard(props) {
  const classes = useStyles();
  const time2 = Number(props.deliveryTime) + 10;
  const history = useHistory()
  return (
    <Card onClick={() => goToRestaurantPage(history, props.id)}
      style={{
        border: "1px solid #b8b8b8",
        boxShadow: "none",
        marginBottom: "10px",
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
        <CardContent>
          <Typography className={classes.title} gutterBottom variant="h5">
            {props.name}
          </Typography>
          <DivDetalhes>
            <Typography variant="body2" color="textSecondary">
              {props.deliveryTime} - {time2} min
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Frete R${props.shipping},00
            </Typography>
          </DivDetalhes>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
