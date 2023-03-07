import React from 'react';
import { Item } from './Item';

export const ItemsList = ({items, itemHandler}) => {
    console.log(items);
	return (<>
		{
			items.map((item, idx) => {
				return (
                <>
                <a id="item" onClick={() => itemHandler(idx)}>
                    <Item item={item} key={idx} />
                </a>
                </>
                )
			})
		}
	</>)
} 