import React from 'react';

export const SingleViewItem = ({item, setWhichPage, deleteItem, receiptItems, setReceiptItems}) => {
    //console.log(receiptItems);

    
    async function addItem(){
		try {
			receiptItems.push(item);
			console.log(receiptItems);
			
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

    return (
        
            <>
                <div class="content2">
                    <h1 >{item.title}</h1>
                </div>
                <br></br>
                <div class="content">
                    <h2>Details:</h2>
                    <br></br>
                    <div id="flex-container-item-info">
                    <ul>
                        <li><h4 id="singlePageViewer2"><strong id="singlePageViewer2">Price:</strong> £{item.price}</h4></li>
                        
                        <li><p id="singlePageViewer2"><strong id="singlePageViewer2">Description:</strong> {item.description}</p></li>
                    
                        <li><p id="singlePageViewer2"><strong id="singlePageViewer2">Category:</strong> {item.category}</p></li>
                    </ul>
                    </div>
                    <br></br>
                    <br></br>
                    <div id ="zoom">
                        <img src={item.image} alt={item.title} id="imageViewer"/> 
                    </div>
                    <br></br>
                    
                    
                
                

                        <div id="btnSort">
                            <div>
                                <button  onClick={() => addItem()} id="reactBtnF">Add to Cart</button>
                            </div>
                            <br></br>
                            <br></br>
                            <div>
                            <button onClick={() => setWhichPage('UpdateItem')} id="reactBtn" >Update Item</button>
                            </div>
                            <div>
                            <button onClick={() => deleteItem()} id="deletebtn" >Delete</button>
                            </div>
                        </div>

                        </div> 
                        
                      
            </>
            
           
        
    )
}