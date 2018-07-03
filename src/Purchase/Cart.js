

import React, { Component } from "react";
import axios from "axios"
import CartItem from "./CartItem";
import ErrorBoundary from "./ErrorBoundary"
class Cart extends Component {
  state = {
    products: [
      {
        name: "produit 1",
        prix: 10.3
      },
      {
        name: "produit 2",
        prix: 105.5
      }
    ],
    promoCode: "",
    showedDiscount: false
  };
  showMessageHandler = code => {
    console.log("clicked ! ");
    this.setState({ promoCode: code });
  };
  showHideBlock = () => {
    const currentState = this.state.showedDiscount;
    this.setState({ showedDiscount: !currentState });
  };
  changeNameHandler = event => {
    console.log(event.target.value);
    this.setState({
      products: [
        {
          name: "produit 1 ",
          prix: 10.3
        },
        {
          name: "produit 2",
          prix: 105.5
        }
      ],
      promoCode: ""
    });
  };
  render() {
    let items = null
    if (this.state.showedDiscount == true) {
      items = (
        this.state.products.map(item => {
          return (<CartItem
            change={this.changeNameHandler}
            click={this.showMessageHandler}
            name={item.name}
          >
            description
</CartItem>)
        }));
    }
    return (
      <ErrorBoundary>
        <h1>je suis un panier </h1>
        <p>Code promo : {this.state.promoCode} </p>
        <button onClick={this.showHideBlock}> apply </button>
        {items}
      </ErrorBoundary>
    );
  }
}
export default Cart;
