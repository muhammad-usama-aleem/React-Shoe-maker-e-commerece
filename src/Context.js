import React, { Component  } from 'react';

const CartContext = React.createContext();

class CartProvider extends Component{
    state = {
        cart: []
    };

    render() {
        return (
        <CartContext.Provider value='hello from context'>
            {this.props.children}
        </CartContext.Provider>
        )
    }
}

const CartConsumer = CartContext.Consumer;
export {CartContext, CartProvider, CartConsumer};