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
	
	//Adding a new item
	//Checking whether we add a form
	const [isAddingItem, setIsAddingItem] = useState(false);

	const [title, setTitle] = useState('');
	const [price, setPrice] = useState('');
	const [description, setDescription] = useState('');
	const [category, setCategory] = useState('');
	const [pictureURL, setPictureURL] = useState('');

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

	async function createItem(){
		const response = await fetch(`${apiURL}/items/`, {
			method: "POST",
			headers: {
				 'Content-Type': 'application/json' 
			},
			body: JSON.stringify(
				{
					title: title,
					price: price,
					description: description,
					category: category,
					image: pictureURL
				}
			)
		});
		const data = await response.json();
		fetchItems();
	}

	useEffect(() => {
		fetchItems();
	}, []);
	if(singleItem == '' && isAddingItem == false) {
		return (
			<main>	
				<h1>Inventory App</h1>
				<h2>Index</h2>
				<ItemsList items={items} itemHandler={itemHandler} />
				<button onClick={() => setIsAddingItem(true)}>Add an Item</button>
			</main>
		)
	} else if (singleItem != '' && isAddingItem == false)  {
		return <SingleViewItem item={singleItem} setSingleItem={setSingleItem} deleteItem={deleteItem}/>
	} else if (isAddingItem == true) {
		return (
			<main>
				<h1>Add an Item</h1>
				<h3>Add a title</h3>
				<input type="text" name="title" placeholder='Enter a title for the Item' onChange ={(e) => setTitle(e.target.value)}></input>
				<h3>Add a Price</h3>
				<input type="text" name="title" placeholder='Enter a price for the Item' onChange = {(e) => setPrice(e.target.value)}></input>
				<h3>Add a Description</h3>
				<input type="text" name="title" placeholder='Enter a description for the Item' onChange={(e) => setDescription(e.target.value)}></input>
				<h3>Add a Category</h3>
				<input type="text" name="title" placeholder='Enter a category for the Item' onChange={(e) => setCategory(e.target.value)}></input>
				<h3>Add a URL</h3>
				<input type="text" name="title" placeholder='Enter a URL for the Item' onChange={(e) => setPictureURL(e.target.value)}></input>

				<br></br>
				<br></br>
				<button onClick={() => createItem()}>Submit Data</button>
				<button onClick={() => setIsAddingItem(false)}>Return Back</button>
			</main>
		)
	}
}

{/* <h3>{singleItem.title}</h3>
<h4>{singleItem.price}</h4>
<p>{singleItem.description}</p>
<p>{singleItem.category}</p>
<img src={singleItem.image} alt={singleItem.title} /> 
<button onClick={() => setSingleItem('')}>Return Back</button> */}