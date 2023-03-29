import React, {useState} from 'react';

export const SingleViewItem = ({item, setWhichPage, deleteItem, receiptItems, setReceiptItems}) => {
    console.log(item);

    const sleep = async (milliseconds) => {  
        await new Promise((resolve, reject) => {
            return setTimeout(resolve, milliseconds);
        });
    }

    async function addItem(){
		
			receiptItems.push(item);
			console.log(receiptItems);
            
            
            await sleep(1);
            setWhichPage('');
            await sleep(1);
            setWhichPage('ViewSingle');
	}
    
    // async function Modal() {
    //     const [show, setShow] = useState(false);
      
    //     const handleClose = () => setShow(false);
    //     const handleShow = () => setShow(true);
    // }

    // // async function deleteCheck() {
    // //     let text = "Are you sure you want to delete this item!\nEither OK or Cancel.";
    // //     if (confirm(text) == true) {
    // //         deleteItem();
    // //         alert("Item deleted successfully");
    // //     } else {
    // //         alert("Action cancelled");
    // //     }
        
    // /

    function deleteCheck() {
        const modal = document.getElementById("delete-modal");

        const btn = document.getElementById("delete-item-btn");

        const button = document.getElementsByClassName("close")[0];

        btn.onclick = function() {
        modal.style.display = "block"
        }

        button.onclick = function() {
        modal.style.display = "none"}

        window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }};
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
                            <li><h4 id="singlePageViewer2"><strong id="singlePageViewer2">Price:</strong> £{item.price.toFixed(2)}</h4></li>
                            
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
                          
                        <button onClick={() => deleteCheck()} id="delete-item-btn" data-toggle="modal" data-target="delete-modal">Delete</button>
                        
                        </div>
                    </div>

                    <div id="delete-modal" tabindex="-1" role="dialog" aria-labelledby="warning-{ item }">
                        <div class="modal-dialog modal-confirm">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h3 class="modal-title">Delete Confirmation</h3>
                                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                </div>
                                <div class="modal-body">
                                    <p class="text-dark">Are you sure you want to delete { item.title }? This cannot be undone.</p>
                                </div>
                                <div class="modal-footer">
                                    <button onClick={() => deleteItem()} id="delete-item-btn">Delete</button>
                                </div>
                            </div>
                        </div>   
                    </div>
                </div>

                {/* <script>
                        const modal = document.getElementById("delete-modal");

                        const btn = document.getElementById("delete-item-btn");

                        const button = document.getElementsByClassName("close")[0];

                        btn.onclick = function() {
                        modal.style.display = "block"}

                        button.onclick = function() {
                        modal.style.display = "none"}

                        window.onclick = function(event) {
                        if (event.target == modal) {
                            modal.style.display = "none"
                            }};
                </script> */}
                       
            </> 
)}