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
        },
        {
          props: {color: 'secondary',variant: 'contained'},
          style: {
            '&:hover': {
              backgroundColor: '#ffffff'
            },
            '&:disabled': {
              color: '#000000',
              backgroundColor: '#999ca5'
            }
          }
        },
        {
          props: {color: 'secondary',variant: 'outlined'},
          style: {
            color: 'white',
            backgroundColor: '#4e5561',
            '&:hover': {
              border: '2px solid #a3a6ac',
              backgroundColor: '#626873'
            },
            '&:disabled': {
              color: '#b2b3b9',
              border: '2px solid #636974',
              backgroundColor: '#474d5a'
            }
          }
        },
        {
          props: {color: 'secondary',variant: 'text'},
          style: {
            '&:hover': {
              color: '#ffffff',
              backgroundColor: '#ffffff00',
            },
            '&:disabled': {
              color: '#942a59'
            }
          }
        },
        {
          props: {color: 'success',variant: 'contained'},
          style: {
            '&:hover': {
              backgroundColor: '#4fc5ba'
            },
            '&:disabled': {
              color: '#97a8ae',
              backgroundColor: '#2e7e7c'
            }
          }
        },
      ]
    }
  }
});






