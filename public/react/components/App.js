import React, { useState, useEffect } from 'react';

import { ItemsList } from './ItemsList';
import { SingleViewItem } from './SingleViewItem';
import { AddItem } from './AddItem';
import { UpdateItem } from './UpdateItem';
import { SearchBar } from './SearchBar';
import { ShoppingCart } from './ShoppingCart';
// import and prepend the api url to any fetch calls
import apiURL from '../api';
import Companylogo from "./davies-logo.jpeg"

// Bootstrap
// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

export const App = () => {


	const [items, setItems] = useState([]);
	const[isLoggedIn, setIsLoggedIn] = useState(true);
	const [singleItem, setSingleItem] = useState('');
	
	//Adding a new item
	const [whichPage, setWhichPage] = useState('Search');
	//Checking whether we add a form
	const [isAddingItem, setIsAddingItem] = useState(false);

	const [title, setTitle] = useState('');
	const [price, setPrice] = useState('');
	const [description, setDescription] = useState('');
	const [category, setCategory] = useState('');
	const [pictureURL, setPictureURL] = useState('');

	//Shopping Total Amount
	const [totalCost, setTotalCost] = useState(0);
	//List of shopping items
	const [receiptItems, setReceiptItems] = useState([]);

	//Checking if logged in 
	//let isLoggedIn = false;
	//const[isLoggedIn, setIsLoggedIn] = useState(true);
	const [userName, setUserName] = useState('');
	const [userPassWord, setUserPassWord] = useState('');

	const [isSignnUp, setSignUp] = useState(false);
	const [createUserName, setCreateUserName] = useState('');
	const [createUserPassWord, setCreateUserPassWord] = useState('');

	const [users, setUsers] = useState([]);
	const [user, setUser] = useState('');
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

	async function fetchUsers(){
		try {
			const response = await fetch(`${apiURL}/users`);
			const itemsData = await response.json();
			
			setUsers(itemsData);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}
	let check;
	//Async function to login the user
	async function login() {
		
		const response = await fetch(`${apiURL}/users`);
		const usersData = await response.json();

		setUsers(usersData);
		console.log(usersData);
		//console.log(users);
		let checkUser = null;
		for (const cUser of usersData) {
			if (cUser.username == userName) {
				//setUser(cUser);
				checkUser = cUser;
			}
		}
		console.log(checkUser);
		console.log(userName, userPassWord);
		if(checkUser != null) {
			console.log("vALID");
			
			if(checkUser.password == userPassWord) {
				console.log(`User ${userName} logged in`);
				//console.log(isLoggedIn);
				//isLoggedIn = true;
				setIsLoggedIn(true);
				console.log(isLoggedIn);
				alert(`User ${userName} logged in`);
				setUser(cUser);
				
				
			} else {
				console.log(`Invalid password`);
				alert("Invalid password");
		
			}
		} else {
			alert(userName + " is not registered.");
			console.log(userName + " is not registered.");
		}

		
		
	}

	async function returnLogin() {
		setCreateUserName('');
		setCreateUserPassWord('');
		const inputU = document.getElementById('inputU');
		if(inputU){
			inputU.value = "";
		}
		
		const inputP = document.getElementById('inputP');
		if(inputP){
			inputP.value = "";
		}

		const inputU2 = document.getElementById('inputU2');
		if(inputU2){
			inputU2.value = "";
		}
		const inputP2 = document.getElementById('inputP2');
		if(inputP2){
			inputP2.value = "";
		}

		
		setSignUp(false);
	}

	async function signingUp() {
		setCreateUserName('');
		setCreateUserPassWord('');
		setUserName('');
		setUserPassWord('');

		const inputU = document.getElementById('inputU');
		if(inputU){
			inputU.value = "";
		}
		
		const inputP = document.getElementById('inputP');
		if(inputP){
			inputP.value = "";
		}

		const inputU2 = document.getElementById('inputU2');
		if(inputU2){
			inputU2.value = "";
		}
		const inputP2 = document.getElementById('inputP2');
		if(inputP2){
			inputP2.value = "";
		}

		setSignUp(true);
	}

	async function createUser() {
		let Vdata;
		try {
			const response = await fetch(`${apiURL}/users/`, {
				
					method: "POST",
					headers: {
						'Content-Type': 'application/json' 
					},
					body: JSON.stringify(
						{
							username: createUserName,
							password: createUserPassWord
						
						}
					)	
				
				
			});
			const data = await response.json();
			console.log(data);
			fetchUsers();
			Vdata = data;
		} catch(err) {
			console.log(err);
		}

		console.log(Vdata);
		console.log(Vdata.username);
		if(Vdata.username) {
			console.log("Created a new user");
			alert("Created a new user");
			returnLogin();
		} else {
			console.log("Failed to create user");
			alert("Failed to create a new user");
		}
	}
	async function logout() {
		setIsLoggedIn(false);
		setUser(null);
		setUserName('');
		setUserPassWord('');
		setReceiptItems([]);
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
		fetchItems();
	}

	//Async function to get a single item from search
	async function itemHandlerSearch(title) {
		try {
			let index = -1;
			for( const item of items) {
				if( item.title === title) {
					index = items.indexOf(item);
					console.log("Checking index array:", index);
				}
			}
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
		fetchItems();
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
			setWhichPage('Home');
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
		setIsLoggedIn(true);
		isLoggedIn(true);
		const data = await response.json();
		fetchItems();
	}
	async function addItem(){
		try {
			receiptItems.push(item);
			
			
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
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
		const response = await fetch(`${apiURL}/items/${id}`, {
			method: 'PUT',
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
		setWhichPage('Home');
	}
	useEffect(() => {
		fetchItems();
		fetchUsers();
	}, []);


	//Selection to view which page specifically is selected
	//This will change based upon the selected page
	let reactView;

	if (check == true) {
		setIsLoggedIn(true); 
	}
	switch(whichPage) {
		case 'Home': (
			reactView = <ItemsList items={items} itemHandler={itemHandler} setWhichPage={setWhichPage} />
		);	
		break;
		case 'ViewSingle': (
			reactView = <SingleViewItem item={singleItem} setWhichPage={setWhichPage} deleteItem={deleteItem} receiptItems={receiptItems} addItem={addItem}/>
		);
		break;
		case 'Add': (
			reactView = <AddItem createItem={createItem} setTitle={setTitle} setPrice={setPrice} setDescription={setDescription} setCategory={setCategory} setPictureURL={setPictureURL} setWhichPage={setWhichPage} />
		);
		break;
		case 'UpdateItem': (
			reactView = <UpdateItem setWhichPage={setWhichPage} item={singleItem} setTitle={setTitle} setPrice={setPrice} setDescription={setDescription} setCategory={setCategory} setPictureURL={setPictureURL} updateItem={updateItem}/>
		);
		break;
		case 'Search': (
			reactView = <SearchBar items={items} itemHandler={itemHandler} itemHandlerSearch={itemHandlerSearch}/>
		);
		break;
		case 'ShoppingCart': (
			reactView = <ShoppingCart receiptItems={receiptItems} setReceiptItems={setReceiptItems} setWhichPage={setWhichPage}/>
		);
		break;
		default: 
			reactView = null;
			break;
	}


	if(isLoggedIn === true ){
		return ( 
			<>
				<main>
				<div class="sidebar">
					
					<img src={Companylogo} alt="image"  width="100%" id="DaviesIMG"></img>
					<a  onClick={() => setWhichPage('Search')}>Search</a>
					<a  onClick={() => setWhichPage('Home')}>Catalogue</a>
					<a  onClick={() => setWhichPage('ShoppingCart')}>Cart : {receiptItems.length} item(s)</a>
					<a  onClick={() => setWhichPage('Add')}>Create Item</a>
					<a  onClick={() => logout()}>Log out : {userName}</a>
					
				</div>
				
					{reactView}
				
					
				</main>
		
				<footer>
					
				</footer>
			</>
		)
	} else if (isLoggedIn === false && isSignnUp === false)  {
		return (
			<>
			
			<h1 >Login Page</h1>
			<br></br>
			<br></br>
			<br></br>
			<div class="content3">
				<div class="logInStuff">
					<h2>Enter your username:</h2>
					<input id= "inputU2" type="text" name="username" required placeholder='Enter your username' onChange ={(e) => setUserName(e.target.value) } autocomplete="off" />
					<br></br>
					
					<h2>Enter your password:</h2>
					<input id= "inputP2" type="text" name="password" required placeholder='Enter your password' onChange ={(e) => setUserPassWord(e.target.value)} autocomplete="off" />

					<br></br>
					<button id="reactBtn" onClick={() => login()}>Login</button>
					<br></br>
					<br></br>
					<p onClick={() => signingUp()}>Sign Up</p>
					<br></br>
				</div>
			</div>
			</>
		)
		
	} else {
		return (
			<>
				<h1>Create An Account</h1>
				<br></br>
				<br></br>
				<br></br>
				<div class="content3">
					<div class="logInStuff">
						<h2>Create Username:</h2>
						<input id = "inputU" type="text" name="Username" required placeholder='Create your username' onChange ={(e) => setCreateUserName(e.target.value)} autocomplete="off"/>
						<br></br>
						
						<h2>Create Password:</h2>
						<input id= "inputP" type="text" name="Password" required placeholder='Create your password' onChange ={(e) => setCreateUserPassWord(e.target.value)} autocomplete="off"/>

						<br></br>
						<button id="reactBtn" onClick={() => createUser()}>Create Account</button>
						<button id="reactBtn" onClick={() => returnLogin()}>Return Back</button>
						<br></br>
						
					</div>
				</div>
			</>
		)
	}
}


				//<img src={Companylogo} alt="image" height="8%" width="100%"></img>