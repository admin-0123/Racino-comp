import { createTheme } from "@mui/material";
import { cyan, pink } from "@mui/material/colors";

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#d81c60',
    },
    secondary: {
      main: '#d8d9dc',
    },
    success: {
      main: '#26a69a'
    }
  },
});
