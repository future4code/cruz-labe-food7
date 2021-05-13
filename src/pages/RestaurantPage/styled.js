import styled from "styled-components";
import { primaryColor } from "../../constants/colors";

export const Container = styled.div`
  width: clamp(340px, 100vw, 900px);
  display: flex;
  flex-direction: column;
  justify-self: center;
`;

export const MainTitleBar = styled.div`
  border-bottom: 1px solid black;
  margin: 3%;
  padding-bottom: 2%;
`;

export const OrderButton = styled.button`
  margin-left: 25px;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 100%;
  border-top-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border: none;
  color: ${primaryColor};
  cursor: pointer;
  background-color: transparent;
`;
export const CloseButton = styled.button`
  margin-left: 227px;
  border-top-right-radius: 7px;
  border-bottom-left-radius: 8px;
  border: 1px solid ${primaryColor};
  color: ${primaryColor};
  cursor: pointer;
  background-color: transparent;
`;
export const OrderImage = styled.img`
  width: 100%;
  height: 112px;
  margin: 0 16px 0 0;
  border-radius: 7px 0 0 7px;
  border: none;
  object-fit: contain;
`;

export const SelectionTitle = styled.div`
  font-size: 13px;
  font-weight: 480;
  display: flex;
  justify-content: center;
`;

export const InputAdd = styled.select`
  margin-left: 1rem;
  width: 210px;
  height: 25px;
  border: 1px solid lightgray;
  border-radius: 2px;
  textarea:focus,
  input:focus,
  select:focus {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
  }
`;

