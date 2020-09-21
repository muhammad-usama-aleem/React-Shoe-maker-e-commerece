import React, { Component } from "react";
import items from "./data";

const CartContext = React.createContext();

export default class CartProvider extends Component {
  state = {
    cart : [],
    data: items,
  };

  addCart = (id) =>{
    const {data, cart} = this.state;
    console.log(cart);
    const check = cart.every(item =>{
        return item._id !== id
    })
    if(check){
        const info = data.filter(product =>{
            return product._id === id
        })
        this.setState({cart: [...cart,...info]})
    }else{
        alert("The product has been added to cart.")
    }
};


  render() {
    return (
      <CartContext.Provider value={{...this.state, addCart : this.addCart}} >
        {this.props.children}
      </CartContext.Provider>
    );
  }
}
const CartConsumer = CartContext.Consumer;
// console.log("CartConsumer",CartConsumer)

export { CartProvider, CartConsumer, CartContext };