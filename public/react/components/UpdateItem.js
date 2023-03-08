import React from 'react';

export const UpdateItem = ({setWhichPage, item}) => {
    return (
        <>
            <h1>Update Item:</h1>
            <h2>{item.title}</h2>


            <button onClick={() => setWhichPage('ViewSingle')} id="reactBtn">Return Back</button>
            <button onClick={() => setWhichPage('Home')} id="reactBtn">Return Home</button>
        </>
    )
}