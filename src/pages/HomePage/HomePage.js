import React, { useEffect, useContext } from "react";
import useInput from "../../hooks/useInput";
import TextField from "@material-ui/core/TextField";
import BASE_URL from "../../constants/urls";
import GlobalStateContext from "../../global/GlobalStateContext";
import axios from "axios";
import useProtectedPage from "../../hooks/useProtectedPage";
import { useHistory } from "react-router-dom";
import RestaurantCard from "../../components/RestaurantCard/RestaurantCard";
import styled from "styled-components";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
const FullScreen = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
const DivCards = styled.div`
  margin: 20px;
`;

const DivCategories = styled.div`
  height: 100%;
  width: 100%;
  overflow: auto;
`;

const DivInput = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 20px;
`;

const DivVazia = styled.div`
  text-align: center;
  color: grey;
  margin-top: 50px;
`;

const HomePage = () => {
  useProtectedPage();

  const {
    /*     setAlertMsg,
    setAlertSeverity,
    setOpenAlert, */
    setRestaurants,
    restaurants,
    setCategories,
    selectedCategory,
    categories,
  } = useContext(GlobalStateContext);

  const [search, setSearch] = useInput("");

  const history = useHistory();

  useEffect(() => {
    axios
      .get(`${BASE_URL}/restaurants`, {
        headers: {
          auth: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setRestaurants(res.data.restaurants);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const restaurantsCategories = restaurants
    .map((restaurant) => {
      return restaurant.category;
    })
    .filter((category, index, self) => {
      return self.indexOf(category) === index;
    });

  useEffect(() => {
    setCategories(restaurantsCategories);
  }, [restaurants]);

  const filteredRestaurants = restaurants.filter((restaurant) => {
    const restaurantName = restaurant.name.toLowerCase();
    if (restaurantName.includes(search.toLowerCase())) {
      return true;
    } else {
      return false;
    }
  });

  const restaurantsCards = filteredRestaurants.map((restaurant) => {
    if (selectedCategory === "" || selectedCategory === null) {
      return (
        <RestaurantCard
          key={restaurant.id}
          id={restaurant.id}
          logoUrl={restaurant.logoUrl}
          name={restaurant.name}
          deliveryTime={restaurant.deliveryTime}
          shipping={restaurant.shipping}
        />
      );
    }
    if (selectedCategory !== "" && selectedCategory === restaurant.category) {
      return (
        <RestaurantCard
          key={restaurant.id}
          id={restaurant.id}
          logoUrl={restaurant.logoUrl}
          name={restaurant.name}
          deliveryTime={restaurant.deliveryTime}
          shipping={restaurant.shipping}
        />
      );
    }
  });

  console.log("filtered;", filteredRestaurants);

  return (
    <FullScreen>
      <DivInput>
        <TextField
          name={"search"}
          value={search}
          onChange={setSearch}
          variant={"outlined"}
          label={"Restaurante"}
          margin={"normal"}
          fullWidth
        />
      </DivInput>

      <DivCategories>
        <CategoryCard />
      </DivCategories>
      <DivCards>{restaurantsCards}</DivCards>
      {filteredRestaurants.length === 0 ? (
        <DivVazia>"Não encontramos :("</DivVazia>
      ) : (
        ""
      )}
    </FullScreen>
  );
};

export default HomePage;
