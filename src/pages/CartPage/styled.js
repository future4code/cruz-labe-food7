import styled from 'styled-components'
import {
  secondaryColor, 
  mainGray,
  primaryColor,
} from '../../constants/colors'

export const Height = styled.div` 
  min-height: 84vh;
  display: flex;
  justify-content: space-between;
  flex-flow: column;
  -bottom: 20px;
`

export const DivAddress = styled.div`
  background-color: ${secondaryColor};
  display: flex;
  flex-flow: column;
` 

export const DivPadding = styled.div` 
  padding: ${(props) => props.$padding || '20px'};
` 

export const EmptyMap = styled.div` 
  text-align: center;
  font-size: 16px;
  margin-bottom: 30px;
` 

export const BoxProduct = styled.div` 
  width: 100%;
  height: 18vh;
  border: 1px solid ${mainGray};
  border-radius: 10px;
  position: relative;
  display: flex;
` 

export const ProductImg = styled.img` 
  height: 100%;
  width: 14vh;
  object-fit: cover;
  border-radius: 10px 0px 0px 10px;
` 

export const BoxQuantity = styled.div`
  border: 1px solid ${primaryColor};
  position: absolute;
  height: 5vh;
  width: 5vh;
  top: -1px;
  right: -1px;
  border-radius: 0px 10px 0px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const BoxInfos = styled.div`
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
` 

export const RemoveButton = styled.button` 
  border: 1px solid ${primaryColor};
  position: absolute;
  height: 5vh;
  bottom: -1px;
  right: -1px;
  border-radius: 10px 0px 10px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  background-color: transparent;
  font-size: 12px;
  color: ${primaryColor};
  padding: 0px 10px 0px 10px;
`

export const BoxPrices = styled.div` 
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-flow: column;
` 

export const DivSubtotal = styled.div` 
  text-align: end;
`

export const DivTotal = styled.div` 
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 10px;
`

export const Linha = styled.hr` 
  width: 100%;
` 

export const Confirm = styled.button` 
  font-size: 16px;
  width: 100%;
  outline: none;
  background-color: ${primaryColor};
  opacity: ${(props) => props.$opacity || 1};
  border: none;
  padding: 10px 0px 10px 0px;
` 

export const Method = styled.div` 
  display: flex;
  align-items: center;
`

export const PaymentOption = styled.input ` 

`

export const Spacing = styled.div `
  height: 20px;
  width: 100%;
`