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
      variants: [
        {
          props: {color: 'primary',variant: 'contained'},
          style: {
            '&:hover': {
              backgroundColor: '#df487f'
            },
            '&:disabled': {
              color: '#b2b3b9',
              backgroundColor: '#9a295a'
            }
          }
        },
        {
          props: {color: 'primary',variant: 'outlined'},
          style: {
            color: 'white',
            backgroundColor: '#4e5561',
            '&:hover': {
              border: '2px solid #a9577a',
              backgroundColor: '#626873'
            },
            '&:disabled': {
              color: '#b2b3b9',
              border: '2px solid #763a5a',
              backgroundColor: '#474d5a'
            }
          }
        },
        {
          props: {color: 'primary',variant: 'text'},
          style: {
            '&:hover': {
              color: '#d4477c',
              backgroundColor: '#ffffff00',
            },
            '&:disabled': {
              color: '#942a59'
            }
          }
        }
      ]
    }
  }
});






