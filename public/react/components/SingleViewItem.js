import React from 'react';

export const SingleViewItem = ({item, setWhichPage, deleteItem}) => {
    return (
        
            <body id="singlePageViewer">
                <br></br>
                <br></br>
                <h3 id="singlePageViewer">{item.title}</h3>
                <br></br>
                <h4 id="singlePageViewer"><strong id="singlePageViewer">Price:</strong> £{item.price}</h4>
                
                <p id="singlePageViewer"><strong id="singlePageViewer">Description:</strong> {item.description}</p>
            
                <p id="singlePageViewer"><strong id="singlePageViewer">Category:</strong> {item.category}</p>
                <br></br>
                <br></br>
                <img src={item.image} alt={item.title} id="imageViewer"/> 
                <br></br>
                <br></br>
                <footer id="bottom">
                    <button onClick={() => setWhichPage('Home')} id="reactBtn">Return Back</button>
                    <button onClick={() => setWhichPage('UpdateItem')} id="reactBtn">Update Item</button>
                    <button onClick={() => deleteItem()} id="reactBtn">Delete Item</button>
                    <br></br>
                    <br></br>
                    
                </footer>
            </body>
           
        
    )
}