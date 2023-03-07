import React from 'react';

export const SingleViewItem = ({item, setSingleItem, deleteItem}) => {
    return (
        <>
            <main id="singlePageViewer">
            <br></br>
            <br></br>
            <h3 id="singlePageViewer">{item.title}</h3>
            <br></br>
			<h4 id="singlePageViewer"><strong id="singlePageViewer">Price:</strong> £{item.price}</h4>
            
			<p id="singlePageViewer"><strong id="singlePageViewer">Description:</strong> {item.description}</p>
         
			<p id="singlePageViewer"><strong id="singlePageViewer">Category:</strong> {item.category}</p>
			<img src={item.image} alt={item.title} id=""/> 
            <br></br>
            <br></br>
			<button onClick={() => setSingleItem('')}>Return Back</button>
            <button>Update Item</button>
            <button onClick={() => deleteItem()}>Delete Item</button>
            </main>
        </>
    )
}