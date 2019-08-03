import React, {useState, useContext} from 'react';
import {ShoppingContext} from './ShoppingContext';

const Nav = () => {
	const [item, setItem] = useContext(ShoppingContext);

	return(
		<div className='nav-bar'>
			<h1> Dom </h1>
			<p> Shopping items: {item.length} </p> 
		</div>

	)
}

export default Nav; 