import React from 'react';

export const ShoppingCart = ({receiptItems, setReceiptItems}) => {
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
                                <td id="price-table">Price: £{item.price}</td>
                            </tr>
                        </table>
                            
                            
                        </>
                    )
                })
              }
              <br></br>
              <br></br>
              <h3>Total Cost: £{totalSum.toFixed(2)}</h3>
            </div>
        </>
    )
}