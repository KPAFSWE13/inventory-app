import React, { useState, useEffect } from 'react';

import { ItemsList } from './ItemsList';
import { SingleViewItem } from './SingleViewItem';
import { AddItem } from './AddItem';
// import and prepend the api url to any fetch calls
import apiURL from '../api';
import { UpdateItem } from './UpdateItem';

export const App = () => {


	const [items, setItems] = useState([]);

	const [singleItem, setSingleItem] = useState('');
	
	//Adding a new item
	const [whichPage, setWhichPage] = useState('Home');
	//Checking whether we add a form
	const [isAddingItem, setIsAddingItem] = useState(false);

	const [title, setTitle] = useState('');
	const [price, setPrice] = useState('');
	const [description, setDescription] = useState('');
	const [category, setCategory] = useState('');
	const [pictureURL, setPictureURL] = useState('');

	//Async function to get all the items
	async function fetchItems(){
		try {
			const response = await fetch(`${apiURL}/items`);
			const itemsData = await response.json();
			
			setItems(itemsData);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

	//Async function get a single item
	async function itemHandler(index) {
		try {
			const id = items[index].id;
			const response = await fetch(`${apiURL}/items/${id}`);
			const singularItem = await response.json();
			setSingleItem(singularItem);
			setWhichPage('ViewSingle');
			console.log(singularItem);
			console.log(singleItem);
		} catch (err) {
			console.log("Unfortunatly not, there's an error.")
		}
	}

	//Async function to delete a single item
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


	//Async function to create a new item
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

	//Async function update an item
	async function updateItem() {
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
	}
	useEffect(() => {
		fetchItems();
	}, []);


	//Selection to view which page specifically is selected
	//This will change based upon the selected page
	let reactView;

	switch(whichPage) {
		case 'Home': (
			reactView = <ItemsList items={items} itemHandler={itemHandler} setWhichPage={setWhichPage} />
		);	
		break;
		case 'ViewSingle': (
			reactView = <SingleViewItem item={singleItem} setWhichPage={setWhichPage} deleteItem={deleteItem}/>
		);
		break;
		case 'Add': (
			reactView = <AddItem createItem={createItem} setTitle={setTitle} setPrice={setPrice} setDescription={setDescription} setCategory={setCategory} setPictureURL={setPictureURL} setWhichPage={setWhichPage} />
		);
		break;
		case 'UpdateItem': (
			reactView = <UpdateItem setWhichPage={setWhichPage} item={singleItem}/>
		);
		break;
		default: 
			reactView = null;
			break;
	}

	return ( 
		<>
			<navbar>
				
			</navbar>

			<main>
				{reactView}
			</main>
	
			<footer>

			</footer>
	
		</>
	)
	// if(singleItem == '' && isAddingItem == false) {
	// 	return (
	// 		<main>	
	// 			<h1>Inventory App</h1>
	// 			<h2>Index</h2>
	// 			<ItemsList items={items} itemHandler={itemHandler} />
	// 			<button onClick={() => setIsAddingItem(true)}>Add an Item</button>
	// 		</main>
	// 	)
	// } else if (singleItem != '' && isAddingItem == false)  {
	// 	return <SingleViewItem item={singleItem} setSingleItem={setSingleItem} deleteItem={deleteItem}/>
	// } else if (isAddingItem == true) {
	// 	return (
	// 		<main>
	// 			<form onSubmit={ createItem }>
	// 				<h1>Add an Item</h1>
	// 				<h3>Add a title</h3>
	// 				<input type="text" name="title" placeholder='Enter a title for the Item' onChange ={(e) => setTitle(e.target.value)}></input>
	// 				<h3>Add a Price</h3>
	// 				<input type="text" name="title" placeholder='Enter a price for the Item' onChange = {(e) => setPrice(e.target.value)}></input>
	// 				<h3>Add a Description</h3>
	// 				<input type="text" name="title" placeholder='Enter a description for the Item' onChange={(e) => setDescription(e.target.value)}></input>
	// 				<h3>Add a Category</h3>
	// 				<input type="text" name="title" placeholder='Enter a category for the Item' onChange={(e) => setCategory(e.target.value)}></input>
	// 				<h3>Add a URL</h3>
	// 				<input type="text" name="title" placeholder='Enter a URL for the Item' onChange={(e) => setPictureURL(e.target.value)}></input>

	// 				<br></br>
	// 				<br></br>
	// 				<button type="submit">Submit Data</button>
	// 				<button onClick={() => setIsAddingItem(false)}>Return Back</button>
	// 			</form>
	// 		</main>
	// 	)
	// }
}

{/* <h3>{singleItem.title}</h3>
<h4>{singleItem.price}</h4>
<p>{singleItem.description}</p>
<p>{singleItem.category}</p>
<img src={singleItem.image} alt={singleItem.title} /> 
<button onClick={() => setSingleItem('')}>Return Back</button> */}