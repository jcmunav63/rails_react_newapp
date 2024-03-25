import "@hotwired/turbo-rails"
// import "./controllers"
// import React from 'react';
// import ReactDOM from 'react-dom';

// function App() {
//   return (<h1>ANOTHER Hello World!</h1>);
// }

// ReactDOM.render(
//   <App/>,
//   document.getElementById('root'),
// );

import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store';
// import './index.css';
import App from './components/App';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
);
