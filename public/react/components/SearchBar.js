import React, {useState} from 'react';

export const SearchBar = ({items, itemHandler, itemHandlerSearch}) => {
    // const [searchInput, setSearchInput] = useState('');
    // console.log(items);
    // const arrItems = items;
    // console.log(arrItems);

    // const handleChange = (e) => {
    //     e.preventDefault();
    //     setSearchInput(e.target.value);
    //   };
      
    //   if (searchInput.length > 0) {
    //       arrItems.filter((item) => {
    //         console.log(searchInput);
    //         console.log(item.title.match(searchInput));
    //       return item.title.match(searchInput);
    //   });
    // }
   // itemHandler(5);
    console.log(items);
    const [query, setQuery] = useState('');
    return (
        <div>
            <div class="content2">
                <h1>Davies' Search Bar</h1>
            </div>
            
            <br></br>
            <div class="content">
            <h2>Enter the item you're looking for...</h2>
            <br></br>
            <br></br>
            <br></br>
            <input placeholder="Enter search title..." onChange={event => setQuery(event.target.value)} id="searchBar" autocomplete="off"/>
            <br></br>
            <br></br>
            {items.filter(item => {
                if (query === '') {
                    //return item;
                } else if (item.title.toLowerCase().includes(query.toLowerCase())) {
                    return item;
                }
            }).map((item, idx) => {
                return (
                    <div className="box" key={idx} onClick={() => itemHandlerSearch(item.title)}>
                        
                            <h4>{item.title}</h4>
                            <p>Price: £{item.price}</p>
                    </div>
                )
                
                
           
            })}
            </div>
            
        </div>
        )
}

{/* <input type="text" placeholder="Search Here..." onChange={handleChange} value={searchInput} />

            
<table>
<tr>
    <th>Item</th>
    <th>Title</th>
</tr>

{arrItems.map((itemZ, index) => {

<div>
<tr>
    <td>{itemZ.title}</td>
    <td>{itemZ.price}</td>
</tr>
</div>

})}
</table> */}
