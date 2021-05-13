import styled from "styled-components";

export const PostCardContainer = styled.div`
  
  width: 60vw;
  margin: 5%;
  @media screen and (max-width: 992px) {
    width: 80vw;
  }
  @media screen and (max-width: 600px) {
    width: 90vw;
  }
`

export const PostCardContent = styled.div`
  display: flex;
  min-height: 10vh;
  justify-content: space-between;
`

export const RightContent = styled.div`
    margin-left: 5%;
  margin-top: 4px;
`

export const LeftContent = styled.div`

`

export const TitleAddress = styled.p`
  color: rgba(0, 0, 0, 0.5);
`

export const ButtonProfile = styled.button`
  border: none;
  background-color: #ffff;
`
export const ButtonEddress = styled.button`
  border: none;
`
export const CardRes = styled.div`

`

export const CardColor = styled.div`
  background-color: #eeeeeb;
`
