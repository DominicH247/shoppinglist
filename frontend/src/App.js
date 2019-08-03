// import React, { Component } from 'react';
// import Table from './Table';
// import Form from './Form';
// import axios from 'axios';

// class App extends Component {
//   state = {
//     shoppinglist : []
//     // characters: [],
//   };

// // removeCharacter = index => {
// //   const{ characters }= this.state

// //   this.setState({
// //     characters: characters.filter((character, i) => {
// //       return i !== index
// //     }),
// //   })
// // }

// // handleSubmit = character => {
// //   this.setState({characters: [...this.state.characters, character] })
// // }


// componentDidMount(){
//   this.getShoppinglist();
// }

// getShoppinglist() {
//   axios
//     .get('http://127.0.0.1:8000/api/v1')
//     .then(res => {
//       this.setState({shoppinglist: res.data});
//     })
//     .catch(err => {
//       console.log(err);
//     });
// }

// render() {

//   return(
//     <div>
//       {this.state.shoppinglist.map(item => (
//         <div key={item.id}>
//           <h1>{item.item_name}</h1>
//           <p>{item.added_by} </p>
//           <p> {item.date} </p>
//         </div>  
//         ))}
//     </div>

//     );
//   }
// }


// export default App;

import React, {useEffect, useState} from "react";
// import axios from 'axios';
// import Item from './Items';
import ShoppingList from './ShoppingList';
import Nav from './Nav';
import {ShoppingProvider} from './ShoppingContext';

const App = () => {


  // const [items, setItems] = useState([]);

  // useEffect(() =>{
  //   getShoppinglist();
  // }, []);

 

  // const getShoppinglist = async () => {
  //   const response = await fetch('http://127.0.0.1:8000/api/v1');
  //   const data = await response.json();
  //   console.log(data);
  //   setItems(data);
  // };



  return(
     <ShoppingProvider>
      <div className="App">
          <Nav />
          <ShoppingList />        
      </div>
    </ShoppingProvider>

  );
};

export default App;