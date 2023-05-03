import { createTheme } from "@mui/material";
import { blueGrey, cyan, pink } from "@mui/material/colors";

export const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#d81c60',
      },
      secondary: {
        main: '#d8d9dc',
      },
      success: {
        main: '#26a69a'
      },
      background: {
        default: blueGrey['800'],
        paper: blueGrey['700'],
      }
    },
  });
