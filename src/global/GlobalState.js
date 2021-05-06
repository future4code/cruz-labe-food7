import React, { useState } from "react";
import GlobalStateContext from "./GlobalStateContext";

const GlobalState = (props) => {
  const [openAlert, setOpenAlert] = useState(false);
  const [alertMsg, setAlertMsg] = useState("");
  const [alertSeverity, setAlertSeverity] = useState("");
  const token = localStorage.getItem("token");
  const [loading, setLoading] = useState("");
  const [restaurants, setRestaurants] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [cart, setCart] = useState([]);
  const [cartQuantity, setCartQuantity] = useState(0);
  const [selectcart, setSelectcart] = useState(false);
  const [selectedItem, setSelectedItem] = useState();
  const [selectedItemRemove, setSelectedItemRemove] = useState(false);
  const [actualPage, setActualPage] = useState("");
  const [back, setBack] = useState(false);
  const [profile, setProfile] = useState({});

  const addItemToCart = (newItem) => {
    const index = cart.findIndex((i) => i.id === newItem.id);
    let newCart = [...cart];
    if (index === -1) {
      newCart.push({ ...newItem, quantity: Number(cartQuantity) });
    } else {
      newCart[index].quantity += Number(cartQuantity);
    }
    
    setCart(newCart);
    alert(`${newItem.name} foi adicionado ao seu carrinho!`);
  };

  const removeItemFromCart = (itemToRemove) => {
    const index = cart.findIndex((i) => i.id === itemToRemove.id);
    let newCart = [...cart];
    if (newCart[index].quantity > 0) {
      newCart.splice(index, 1);
    } else {
      setSelectedItemRemove(false)
    }
    setCart(newCart);
  };
  
  return (
    <GlobalStateContext.Provider
      value={{
        openAlert,
        setOpenAlert,
        alertMsg,
        setAlertMsg,
        alertSeverity,
        setAlertSeverity,
        token,
        loading,
        setLoading,
        restaurants,
        setRestaurants,
        categories,
        setCategories,
        selectedCategory,
        setSelectedCategory,
        cart, setCart,
        addItemToCart,
        removeItemFromCart,
        cartQuantity, setCartQuantity,
        selectcart, setSelectcart,
        selectedItem, setSelectedItem,
        removeItemFromCart,
        selectedItemRemove, setSelectedItemRemove,
        actualPage, setActualPage,
        back, setBack,
        profile,
        setProfile
      }}
    >
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;
