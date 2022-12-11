import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store, persistor } from "./features/store";
// import { PersistGate } from 'redux-persist/integration/react'

import { AuthContextProvider } from "./context/AuthContext";



ReactDOM.render(
  <React.StrictMode>
  <AuthContextProvider>
      <Provider store={store}>
 {/* <PersistGate loading={null} persistor={persistor}>  */}
    <App />
    {/* </PersistGate> */}
  </Provider> 
  </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


