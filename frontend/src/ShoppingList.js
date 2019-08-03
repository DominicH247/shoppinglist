import React, {useState, useContext} from 'react';
import Item from './Items';
import {ShoppingContext} from './ShoppingContext';


const ShoppingList = () => {
	const [items, setItems] = useContext(ShoppingContext);

	return(
		<div className='shopping-list'>
			{items.map(item =>(
       		 	<Item item_name = {item.item_name} added_by={item.added_by} key={item.id} />
       		 ))};
		</div>

	)
}

export default ShoppingList; 