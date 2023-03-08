import React from 'react';

export const Item = ({item, idx}) => {
    return (
        <>
            <h3 id="titles">{idx + 1} : {item.title}</h3>
            
        </>
    )
}

//<p>{item.price}</p>
//<p>{item.description}</p>
//<p>{item.category}</p>

//<img src={item.image} alt={item.title} /> 