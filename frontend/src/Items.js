import React, {useState, useContext} from 'react';
import {ShoppingContext} from './ShoppingContext';


const Item = ({item_name, added_by}) => {

	const [items, setItems] = useContext(ShoppingContext);

	return (
		<div className='shopping-item'>
			<h3>{item_name}</h3>
      
		</div>	


		);

}

export default Item;