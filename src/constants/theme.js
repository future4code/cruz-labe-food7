import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import {
  primaryColor,
  mainGray,
} from "./colors";

const theme2 = createMuiTheme({
  palette: {
    primary: {
      main: primaryColor,
      contrastText: "black",
    },
    background: {
      default: "#ffffff",
      paper: "#ffffff",
    },
    text: {
      primary: "#000000",
      secondary: mainGray,
      disabled: "#ffffff",
    },
  },
});

const themeda = responsiveFontSizes(theme2);

export default themeda;
