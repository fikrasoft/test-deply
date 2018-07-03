import React from "react";

const CartItem = props => {
  return (
    <div>
      <p onClick={props.click}>je suis le produit {props.name}. </p>

      <p>{props.children}</p>
      <a href="#" onClick={() => props.deleteAction(props.id)}>
        delete
      </a>
    </div>
  );
};

export default CartItem;
