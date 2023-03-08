import React from 'react';

export const AddItem = ({createItem, setTitle, setPrice, setDescription, setCategory, setPictureURL, setWhichPage}) => {
    return (
        <form onSubmit={ createItem }>
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
					<button type="submit">Submit Data</button>
					<button onClick={() => setWhichPage('Home')}>Return Back</button>
		</form>
    )
}