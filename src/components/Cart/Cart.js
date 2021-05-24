import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);

    // const total = cart.reduce((total, prod) => total + prod.price, 0);

    //Product Price.
    let total = 0;
    for (let i = 0 ; i < cart.length; i++){
        const product = cart[i];
        total = total + product.price;
    }
    
    //Shipping Cost.
    let shipping = 0;

    if (total > 40) {
        shipping = 0;
    } 
    else if (total > 20) {

        shipping = 5.99;
    }
    else if (total > 0) {

        shipping = 12.99;
    }

    //(Tax / Vat ) price.
    const tax = (total / 15).toFixed(2);
    const grandTotal = (total + shipping + Number(tax)).toFixed(2);

    //Number Fixed.
    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }
    return (
        <div className="orderSummary">
            <h2>Ordered Summary </h2>
            <h5>Ordered Item : {cart.length}</h5>
            <h5>Product Price : ${formatNumber(total)}</h5>
            <h5>Shipping Cost : ${shipping}</h5>
            <h5>Tax (15%) : ${tax}</h5>
            <hr/>
            <h3>Total Cost : ${grandTotal}</h3>
        </div>
    );
};

export default Cart;