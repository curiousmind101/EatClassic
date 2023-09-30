import React from "react";
// import { BsFillCartFill } from "react-icons/bs";

const Cart = () =>{
    return (
        <div>
            <div className="text-center flex justify-center items-center mt-80">
               <h1 className="text-gray-700 text-3xl bg-white">Your cart is empty</h1>
               {/* <BsFillCartFill size={100} className="text-center ml-80"/> */}
            </div>
        </div>
    );
}

export default Cart;