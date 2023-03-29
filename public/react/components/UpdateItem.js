import React from 'react';

export const UpdateItem = ({setWhichPage, item, updateItem, setTitle, setPrice, setDescription, setCategory, setPictureURL}) => {
    return (
        <>  
            <div class="content2">
                <h1>Update Item:</h1>
            </div>
            <br></br>
            <div class="content">
            <h2>{item.title}</h2>

            <br></br>
            <br></br>

            <div class="form-container">
            <form onSubmit={ updateItem } id="formID" autocomplete="off">
                <h4>Update Title:</h4>
                <input type="text" name="title" required onChange={(e) => {setTitle(e.target.value)}} placeholder = { item.title }/>

                <h4>Update Price:</h4>
                <input type="number" name="price" required onChange={(e) => {setPrice(e.target.value)}} placeholder = { item.price }/>

                <h4>Update Description:</h4>
                <input type="text" name="description" required onChange={(e) => {setDescription(e.target.value)}} placeholder = { item.description }/>

                <h4>Update Category:</h4>
                <input type="text" name="category" required onChange={(e) => {setCategory(e.target.value)}} placeholder = { item.category }/>

                <h4>Update Picture:</h4>
                <input type="text" name="Picture" required onChange={(e) => {setPictureURL(e.target.value)}} placeholder = { item.image }/>


                <br></br>
                <br></br>
                <button  id="reactBtn" class="btnL">Update Item</button>
                <button onClick={() => setWhichPage('ViewSingle')} id="reactBtn" class="btnR">Return Back</button>
                {/* <button onClick={() => setWhichPage('Home')} id="reactBtn">Return Home</button> */}
            </form>
            </div>
            </div>
        </>
    )
}