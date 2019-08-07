import React, {useEffect, useState} from "react";
import ShoppingList from './ShoppingList';
import Nav from './Nav';
import AddItem from './Form.js';
import {ShoppingProvider} from './ShoppingContext';

const App = () => {

  return(
     <ShoppingProvider>
      <div className="App">
          <Nav />
          <AddItem /> 
          <ShoppingList />       
      </div>
    </ShoppingProvider>

  );
}

export default App;