import React from 'react';

export const Item = ({item, idx}) => {
    return (
        <>
            {/* <h3 id="titles">{idx + 1} : {item.title}</h3> */}
            <table>
                <tr>
                    <td id="left-table">{idx + 1}</td>
                    <td id="right-table">{item.title}</td>
                </tr>
            </table>
        </>
    )
}

//<p>{item.price}</p>
//<p>{item.description}</p>
//<p>{item.category}</p>

//<img src={item.image} alt={item.title} /> 