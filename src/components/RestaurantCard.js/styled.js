import { Card, CardContent, Typography } from "@material-ui/core";
import styled from "styled-components";
import { mainGray, primaryColor } from "../../constants/colors";

export const DivDetailsRestaurant = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const StyledTypographyTime = styled(Typography)`
  display: flex;
  flex-direction: row;
  gap: 50px;
`;

export const StyledCardContent = styled(CardContent)`
  margin: -12px;
`;

export const StyledCard = styled(Card)`
  display: flex;
  flex-direction: row;
  border: solid 1px ${mainGray};
`;

export const CardImgFood = styled.img`
  width: 100px;
  object-fit: cover;
`;

export const InfoItemFood = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5%;
  width: 100%;
`;
export const ButtonAdd = styled.span`
  width: 70px;
  height: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-self: flex-end;
  align-self: flex-end;
  padding: 8px;
  color: black;
  cursor: pointer;
  border-radius: 10px 0px 10px 0px;
  border: solid 1px;
`;
export const ButtonRemove = styled.span`
  width: 70px;
  height: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-self: flex-end;
  align-self: flex-end;
  padding: 8px;
  color: red;
  cursor: pointer;
  border-radius: 10px 0px 10px 0px;
  border: solid 1px;
`;

export const NumberProductsCart = styled.div`
  border: 1px solid ${primaryColor};
  color: ${primaryColor};
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 18px;
  padding: 0px 10px 0px 5px;
  align-self: flex-end;
  color: red;
  cursor: pointer;
  border-radius: 0px 10px 0px 10px;
`;

export const DivNumberCart = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 20px;
`;
