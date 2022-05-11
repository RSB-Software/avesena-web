import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './_helpers';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import Header from '../src/components/home/header';
import { createTheme, ThemeProvider  } from "@mui/material";

import { configureFakeBackend } from './_helpers';
import LoggedInMenu from './components/home/loggedInMenu';
import LoggedInAdminMenu from './components/home/loggedInAdminMenu';
//configureFakeBackend();

const customTheme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
      contrastText: 'white',
    },
  },
});

class MainPage extends React.Component {
    render() {
      const isLoggedIn = localStorage.getItem('userLoggedIn');
      let headbar;
      if (isLoggedIn) {
        const userdata = JSON.parse(localStorage.getItem('user'));
        if(userdata.roles == 'ADMIN'){
            headbar = <LoggedInAdminMenu />;
        }else if(userdata.roles == 'USER'){
            headbar = <LoggedInMenu />;
        }else{
            headbar = <Header />;
        }
      } else {
        headbar = <Header />;
      }

      return (
        <ThemeProvider theme={customTheme}>
            <Provider store={store}>
                <React.StrictMode>
                  <BrowserRouter>
                  {headbar}
                  <App />
                  </BrowserRouter>
                </React.StrictMode>
            </Provider>
        </ThemeProvider>
      );
    }
}


ReactDOM.render(
  <MainPage />,
  document.getElementById('root')
);