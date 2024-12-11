import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {store} from "./store/store";
import {Provider} from "react-redux";
import {Root} from "./index.styles";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <Root>
      <App/>
    </Root>
  </Provider>
);
reportWebVitals();
