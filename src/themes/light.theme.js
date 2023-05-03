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
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          backgroundColor: ({ palette }) => palette.primary.main,
          '&:hover': {
            backgroundColor: '#df487f'
          },
          '&:disabled': {
            color: '#b2b3b9',
            backgroundColor: '#9a295a'
          }
        }
      }
    }
  }
});
