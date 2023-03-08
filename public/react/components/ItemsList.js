import React from 'react';
import { Item } from './Item';

export const ItemsList = ({items, itemHandler, setWhichPage}) => {
    console.log(items);
	return (
        <>
        <h1>Inventory App</h1>
		<h2>Index</h2>
		{
            
			items.map((item, idx) => {
				return (
                <>
                
                <a id="item" onClick={() => itemHandler(idx)}>
                     <Item item={item} idx={idx} />
                </a>
                
                </>
                )
			})
		}
        <button onClick={() => setWhichPage('Add')} id="reactBtn">Add an Item</button>
	    </>
        )
} 