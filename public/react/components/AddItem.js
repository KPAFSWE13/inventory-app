import React from 'react';

export const AddItem = ({createItem, setTitle, setPrice, setDescription, setCategory, setPictureURL, setWhichPage}) => {
    return (
                    <>
                    <div class="content2">
					<h1>Item Creation</h1>
                    </div>
                    <br></br>
                    <div class="content">
                    <h2>Form</h2>
                    <br></br>
                    <br></br>
					<div class="form-container">
                    <form onSubmit={ createItem } id="formID">
                        <h3>Add a Title</h3>
                        <input type="text" name="title" required placeholder='Enter a title for the Item' onChange ={(e) => setTitle(e.target.value)}/>
                        <h3>Add a Price</h3>
                        <input type="number" name="price" required placeholder='Enter a price for the Item' onChange = {(e) => setPrice(e.target.value)}/>
                        <h3>Add a Description</h3>
                        <input type="text" name="description" required placeholder='Enter a description for the Item' onChange={(e) => setDescription(e.target.value)}/>
                        <h3>Add a Category</h3>
                        <input type="text" name="category" required placeholder='Enter a category for the Item' onChange={(e) => setCategory(e.target.value)}/>
                        <h3>Add a URL</h3>
                        <input type="text" name="Picture" required placeholder='Enter a URL for the Item' onChange={(e) => setPictureURL(e.target.value)}/>

                        <br></br>
                        <br></br>
                        <button type="submit" id="reactBtn">Submit Data</button>
                        {/* <button onClick={() => setWhichPage('Home')}>Return Back</button> */}
		            </form>
					</div>
                    <script>

                    </script>    
			        </div>
					
                    </>
    )
}