import React, { useContext } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import GlobalStateContext from "../../global/GlobalStateContext";
import { primaryColor } from "../../constants/colors";

const useStyles = makeStyles({});

const StyledToggleButtonGroup = withStyles((theme) => ({
  grouped: {
    margin: theme.spacing(0.5),
    border: "none",
  },
}))(ToggleButtonGroup);

const StyledToggleButton = withStyles((theme) => ({
  root: {
    height: 48,
    marginRight: 20,
    "&:last-child": {
      marginRight: 0,
    },
    "&.Mui-selected": {
      color: primaryColor,
      backgroundColor: "#fff",
    },
  },
}))(ToggleButton);

const CategoryCard = () => {
  const { categories, selectedCategory, setSelectedCategory } = useContext(
    GlobalStateContext
  );
  const classes = useStyles();

  const handleChangeCategory = (event, newCategory) => {
    if (newCategory !== selectedCategory) {
      setSelectedCategory(newCategory);
    } else {
      setSelectedCategory("");
    }
  };

  const categoriesCards = categories.map((category) => {
    return (
      <StyledToggleButton
        className={classes.button}
        key={category}
        value={category}
        disableRipple
      >
        {category}
      </StyledToggleButton>
    );
  });
  return (
    <StyledToggleButtonGroup
      value={selectedCategory}
      exclusive
      onChange={handleChangeCategory}
    >
      {categoriesCards}
    </StyledToggleButtonGroup>
  );
};

export default CategoryCard;
