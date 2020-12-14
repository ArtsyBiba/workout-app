import { unstable_createMuiStrictModeTheme as createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Segoe UI',
  },
  palette: {
      primary: {
        main: '#9b5de5'
      },
      secondary: {
        main: '#F15BB5',
      }
  },
});

export default theme;

// https://coolors.co/9b5de5-f15bb5-fee440-00bbf9-00f5d4