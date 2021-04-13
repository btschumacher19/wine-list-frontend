import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.js';
import WinePage from './pages/WinePage.js';
import AddWinePage from './pages/AddWinePage';


function App() {


  return (
    <>
        <BrowserRouter>
          <div>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/add-wine" component={AddWinePage} />
            <Route exact path="/wines/:wineID" component={WinePage} />
          </div>
        </BrowserRouter>
    </>
  );
}

export default App;
