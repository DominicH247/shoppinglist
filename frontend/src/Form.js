import React, {useState, useContext} from 'react';


const AddItem = () => { 
    // Form state
    const [newItem, setNewItem] = useState('');
    const [auth, added_by] = useState('');
    // const [item, setItems] = useContext(ShoppingContext);
    
    //form state handler
    const handleChange = (e) => {
        setNewItem(e.target.value);
    };

    // submit form data to API as JSON and reset state
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = newItem
        fetch('http://localhost:8000/api/v1/',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({item_name:data}),
        })
        .then((res) => res.json())
        .then((data) => console.log(data))
        setNewItem('')  
    };



    return(
        <form onSubmit={handleSubmit}>
            <label>Item</label>
            <input 
                type="text" 
                name="newItem" 
                value={newItem} 
                onChange={handleChange} />
            <button type="submit">
                Submit
            </button>
        </form>
    );
}

export default AddItem;