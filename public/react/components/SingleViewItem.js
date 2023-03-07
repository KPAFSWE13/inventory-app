import React from 'react';

export const SingleViewItem = ({item, setSingleItem, deleteItem}) => {
    return (
        <>
            <h3>{item.title}</h3>
			<h4>{item.price}</h4>
			<p>{item.description}</p>
			<p>{item.category}</p>
			<img src={item.image} alt={item.title} /> 
			<button onClick={() => setSingleItem('')}>Return Back</button>
            <button>Update Item</button>
            <button onClick={() => deleteItem()}>Delete Item</button>
            
        </>
    )
}