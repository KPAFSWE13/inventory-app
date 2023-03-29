import React from 'react';

export const ShoppingCart = ({receiptItems, setReceiptItems, setWhichPage}) => {
    let totalSum = 0;
    async function totalCost(){
		try {
			for (const item of receiptItems) {
                totalSum += item.price;
            }
			
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

    async function emptyCart(){
		setReceiptItems([]);
	}

    const sleep = async (milliseconds) => {  
        await new Promise((resolve, reject) => {
            return setTimeout(resolve, milliseconds);
        });
    }

    async function removeItem(index){
        console.log(index);
        console.log(receiptItems);
		receiptItems.splice(index, 1);
        setReceiptItems(receiptItems);

        await sleep(1);
        setWhichPage('');
        await sleep(1);
        setWhichPage('ShoppingCart');
        
        

        
	}

    async function pay(){
        let cash = prompt("Please pay with Cash: £", "0");
        console.log(cash);
        if (isNaN(cash)) {
            console.log("Not a number");
            alert("Please enter a numeric cash amount, not a string");
        } else {
            console.log("Number");
            let cashAmount = Number(cash);
            console.log(cashAmount);
            if(cashAmount < totalSum) {
                alert("Inavlid amount. Given: £" + cashAmount.toFixed(2) + " Expected: £" + totalSum.toFixed(2));
            } else {
                alert("Thank you for shooping with us! Total Cost: £" + totalSum.toFixed(2) + ". Cash Given: £" + cashAmount.toFixed(2) + ". Change Amount: £" + (cashAmount - totalSum).toFixed(2) + ".");
                setReceiptItems([]);
            }
        }
    }

    totalCost();
    console.log(totalSum);

    return (
        <>
            <div class="content2">
					<h1>Davies' Shopping Cart</h1>
            </div>
            <br></br>
            <div class="content">
                <h2>Your Cart</h2>
                <br></br>
                <br></br>

              {  receiptItems.map((item, idx) => { 
                    return (
                        <>
                        <table>
                            <tr>
                                <td id="left-table">{idx + 1}</td>
                                <td id="right-table">{item.title}</td>
                                <td id="price-table2"><img src={item.image} alt={item.title} id="imageViewer2"/> </td>
                                <td id="price-table">Price: £{item.price.toFixed(2)}</td>
                                <td class="removeItem"><button  id="deletebtnRow" onClick={() => removeItem(idx)} >Remove</button></td>
                            </tr>
                            
                        </table>
                        
                            
                            
                        </>
                    )
                })
              }
              <br></br>
              <br></br>
              <h3>Total Cost: £{totalSum.toFixed(2)}</h3>
              <button  id="reactBtnPay" onClick={() => pay()}><i class="fa fa-cc-stripe"></i><i class="fa fa-cc-amex"></i><i class="fa fa-cc-paypal">  </i><i class="fa fa-cc-visa"></i></button>
              
              <br></br>
              <button  id="deletebtn" onClick={() => emptyCart()}>Empty Cart</button>
            </div> 
        </>
    )
}