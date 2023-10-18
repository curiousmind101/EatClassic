import React from "react";
// import { BsFillCartFill } from "react-icons/bs";

const Cart = () =>{
    return (
        <div  className="items-center flex-col gap-4">
            <div className="text-center flex justify-center items-center mt-[25vh]">
               <h1 className="text-gray-600 text-3xl bg-white">your cart is empty....</h1>
               {/* <BsFillCartFill size={100} className="text-center ml-80"/> */}
            </div>
            <img className=" container mx-auto h-[50vh] w-[50vh] " src="https://as2.ftcdn.net/v2/jpg/04/72/07/27/1000_F_472072732_fLWaMqYHVDuKvYZ4ARAvUK2fwg8OZENZ.jpg" alt="empty cart"/>
            <p className="justify-center text-center text-gray-600 text-sm bg-white container mx-auto">you haven't added anything yet, please add something to checkout..</p>
            <hr className="bg-gray-500 mt-14"/>
        </div>
    );
}

export default Cart;