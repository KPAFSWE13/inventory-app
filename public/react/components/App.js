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

	//Shopping Total Amount
	const [totalCost, setTotalCost] = useState(0);
	//List of shopping items
	const [receiptItems, setReceiptItems] = useState([]);

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
			reactView = <SearchBar items={items} itemHandler={itemHandler} />
		);
		break;
		case 'ShoppingCart': (
			reactView = <ShoppingCart receiptItems={receiptItems} setReceiptItems={setReceiptItems}/>
		);
		break;
		default: 
			reactView = null;
			break;
	}

	return ( 
		<>
			 {/* {<Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>} * */}
			
			
			

			<main>
			<div class="sidebar">
				
				<h2>Inventory App</h2>
				<a  onClick={() => setWhichPage('Home')}>Home</a>
				<a  onClick={() => setWhichPage('Add')}>Add An Item</a>
				<a  onClick={() => setWhichPage('Search')}>Search</a>
				<a  onClick={() => setWhichPage('ShoppingCart')}>Shopping Cart</a>
				
				
			</div>
			
				{reactView}
			
				
			</main>
	
			<footer>
				
			</footer>
		</>
	)
}


				//<img src={Companylogo} alt="image" height="7.4%" width="100%"></img>