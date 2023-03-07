import React, { useState, useEffect } from 'react';
import { SaucesList } from './SaucesList';
import { ItemsList } from './ItemsList';
import { SingleViewItem } from './SingleViewItem';
// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const App = () => {

	const [sauces, setSauces] = useState([]);
	const [items, setItems] = useState([]);

	const [singleItem, setSingleItem] = useState('');
	
	async function fetchItems(){
		try {
			const response = await fetch(`${apiURL}/items`);
			const itemsData = await response.json();
			
			setItems(itemsData);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

	async function itemHandler(index) {
		try {
			const id = items[index].id;
			const response = await fetch(`${apiURL}/items/${id}`);
			const singularItem = await response.json();
			setSingleItem(singularItem);
			console.log(singularItem);
			console.log(singleItem);
		} catch (err) {
			console.log("Unfortunatly not, there's an error.")
		}
	}

	async function deleteItem() {
		
			let index = -1;
			console.log(items);
			for( const i of items) {
				console.log(i.id);
				console.log(singleItem.id);
				if(i.id === singleItem.id) {
					index = items.indexOf(i);
					console.log("Checking index array:", index);
				}
				
			}
			const id = items[index].id;
			console.log(id);
			const response = await fetch(`${apiURL}/items/${id}`, {
				method: "DELETE"
			});
			//const data = await response.json();
			fetchItems();
			setSingleItem('');
		
	}

	useEffect(() => {
		fetchItems();
	}, []);
	if(singleItem == '') {
		return (
			<main>	
				  <h1>Inventory App</h1>
				<h2>Index</h2>
				<ItemsList items={items} itemHandler={itemHandler} />
			</main>
		)
	} else if (singleItem != '') {
		return (
			<>

				<SingleViewItem item={singleItem} setSingleItem={setSingleItem} deleteItem={deleteItem}/>
				
	
            
        </>
    )
}
}

{/* <h3>{singleItem.title}</h3>
<h4>{singleItem.price}</h4>
<p>{singleItem.description}</p>
<p>{singleItem.category}</p>
<img src={singleItem.image} alt={singleItem.title} /> 
<button onClick={() => setSingleItem('')}>Return Back</button> */}