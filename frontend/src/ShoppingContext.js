import React, {useEffect, useState, createContext} from 'react';

export const ShoppingContext = createContext();

export const ShoppingProvider = (props) => {

  const [items, setItems] = useState([]);

  useEffect(() =>{
    getShoppinglist();
  }, []);

 

  const getShoppinglist = async () => {
    const response = await fetch('http://127.0.0.1:8000/api/v1');
    const data = await response.json();
    console.log(data);
    setItems(data);
  };


	return (
		<ShoppingContext.Provider value={[items, setItems]} >
			{props.children}
		</ShoppingContext.Provider >

	)

}

