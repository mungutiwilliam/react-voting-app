import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";
import Landing from './Landing';
import Card from './components/Card';

ReactDOM.render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="Card" element={<Card />}>
        </Route>
      </Routes>
    </BrowserRouter>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
