import React, { useContext } from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import BASE_URL from "../../constants/urls";
import ProductCard from "../../components/RestaurantCard.js/ProductCard";
import RestaurantCardDetails from "../../components/RestaurantCard.js/RestaurantCardDetails";
import { useHistory, useParams } from "react-router";
import GlobalStateContext from "../../global/GlobalStateContext";
import CardSelector from "./SelectProductTocard";
import { Container, MainTitleBar } from "./styled";
import CardRemove from "./RemoveProducts";
import ClearCart from "./clearcart";

const RestaurantPage = (props) => {
  const [restaurantDetails, setRestaurantDetails] = useState([]);
  const [productsRestaurant, setProductsRestaurant] = useState([]);
  const [categoryGroups, setCategoryGroups] = useState([]);

  const params = useParams();

  const { selectcart, selectedItemRemove, setActualPage, setBack, cardClearCart } = useContext(
    GlobalStateContext
  );

  useEffect(() => {
    getRestaurantDetails();
    setActualPage("Restaurante");
    setBack(true);
  }, []);

  useEffect(() => {
    setProductsRestaurant(restaurantDetails.products);
  }, [restaurantDetails]);

  const getRestaurantDetails = () => {
    axios
      .get(`${BASE_URL}/restaurants/${params.id}`, {
        headers: {
          auth: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setRestaurantDetails(response.data.restaurant);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const showPage = () => {
    return selectcart ? (
      <CardSelector></CardSelector>
    ) : selectedItemRemove ? (
      <CardRemove></CardRemove>
    ) : cardClearCart ? ( <ClearCart></ClearCart> ): null;
  };

  useEffect(() => {
    let groupedCategories = groupCategories(productsRestaurant, "category");
    setCategoryGroups(groupedCategories);
  }, [productsRestaurant]);

  function groupCategories(objectArray, property) {
    if (objectArray) {
      return objectArray.reduce(function (acc, obj) {
        let key = obj[property];
        if (!acc[key]) {
          acc[key] = [];
        }
        acc[key].push(obj);
        return acc;
      }, {});
    }
  }

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {showPage()}
      <Container>
        <RestaurantCardDetails
        key={restaurantDetails.name}
          logoUrl={restaurantDetails.logoUrl}
          name={restaurantDetails.name}
          deliveryTime={restaurantDetails.deliveryTime}
          shipping={restaurantDetails.shipping}
          category={restaurantDetails.category}
          address={restaurantDetails.address}
        />

        {categoryGroups &&
          Object.entries(categoryGroups).map(([categoryName, items]) => (
            <div key={categoryName}>
              <MainTitleBar >{categoryName}</MainTitleBar>
              {items.map((item) => (
                <ProductCard
                  category={item.category}
                  prod={item}
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  Photo={item.photoUrl}
                  description={item.description}
                  price={item.price.toFixed(2)}
                  idRestaurant={params.id}
                />
              ))}
            </div>
          ))}
      </Container>
    </div>
  );
};

export default RestaurantPage;
