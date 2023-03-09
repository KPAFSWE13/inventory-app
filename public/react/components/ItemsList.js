import React from 'react';
import { Item } from './Item';

export const ItemsList = ({items, itemHandler, setWhichPage}) => {
    console.log(items);
	return (
        <>
        <div class="content2">
            <h1>Index Page</h1>
        </div>
        
        <br></br>
        <div class="content">
        <h2>Home</h2>
		<br></br>
        
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
        {/* <button onClick={() => setWhichPage('Add')} id="reactBtn">Add an Item</button> */}
        </div>
	    </>
        )
} 