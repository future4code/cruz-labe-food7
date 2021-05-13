import React, { useContext, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import GlobalStateContext from "../../global/GlobalStateContext";
import useProtectedPage from "../../hooks/useProtectedPage";
import BASE_URL from "../../constants/urls";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";
import OrdersCard from "../../components/OrdersHistoryCard/ordersCard";
import { goToLoginPage } from "../../routes/coordinator";
import { Button, Box } from "@material-ui/core";

import {
  PostCardContainer,
  PostCardContent,
  LeftContent,
  RightContent,
  CardColor,
  ButtonProfile,
  ButtonEddress,
  TitleAddress,
} from "./styled";
import { useHistory } from "react-router-dom";
import { goToEditAddress, goToEditProfile } from "../../routes/coordinator";

const ProfilePage = () => {
  useProtectedPage();
  const history = useHistory();

  const {
    setActualPage,
    setBack,
    profile,
    setProfile,
    orders,
    setOrders,
  } = useContext(GlobalStateContext);

  useEffect(() => {
    getProfile();
    getOrdersHistory();
    setBack(false);
    setActualPage("Meu perfil");
  }, []);

  const getProfile = () => {
    axios
      .get(`${BASE_URL}/profile`, {
        headers: {
          auth: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setProfile(res.data.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const getOrdersHistory = () => {
    axios
      .get(`${BASE_URL}/orders/history`, {
        headers: {
          auth: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setOrders(res.data.orders);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const onClickLogout = () => {
    localStorage.removeItem("token");
    goToLoginPage(history);
  };

  return (
    <div>
      <PostCardContainer>
        <PostCardContent>
          <LeftContent>
            <p>{profile.name}</p>
            <p>{profile.email}</p>
            <p>{profile.cpf}</p>
          </LeftContent>
          <RightContent>
            <ButtonProfile onClick={() => goToEditProfile(history)}>
              <CreateOutlinedIcon />
            </ButtonProfile>
          </RightContent>
        </PostCardContent>
      </PostCardContainer>
      <CardColor>
        <PostCardContainer>
          <PostCardContent>
            <LeftContent>
              <TitleAddress>endereço de cadastro</TitleAddress>
              <ProfileEddres>{profile.address}</ProfileEddres>
            </LeftContent>
            <RightContent>
              <ButtonEddress onClick={() => goToEditAddress(history)}>
                <CreateOutlinedIcon />
              </ButtonEddress>
            </RightContent>
          </PostCardContent>
        </PostCardContainer>
      </CardColor>
      <PostCardContainer>
        <p>Histórico de pedidos</p>
        <hr />
        {orders && orders.length > 0 ? (
          orders.map((order) => {
            return (
              <OrdersCard
                restaurantName={order.restaurantName}
                createdAt={order.createdAt}
                totalPrice={order.totalPrice}
              />
            );
          })
        ) : (
          <Message>Você não realizou nenhum pedido</Message>
        )}
      </PostCardContainer>
      <Box mt={2} mb={2} ml={4} mr={4}>
        <Button
          onClick={() => onClickLogout()}
          type={"submit"}
          variant={"contained"}
          color={"primary"}
          fullWidth
          margin={"normal"}
        >
          Sair
        </Button>
      </Box>
    </div>
  );
};

export default ProfilePage;

const ProfileEddres = styled.p``;
const Message = styled.div`
  text-align: center;
  padding: 10px;
`;
