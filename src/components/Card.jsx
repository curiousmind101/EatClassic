import React, {useState} from "react";
import {BiCartAdd} from 'react-icons/bi'

const Card = ({item, index})=>{
    var [cart, setCart] = useState(0);
    var [value, setValue] = useState(0);
    function increase(){
        setCart(cart+1);
        setValue((cart+1)*item.price);
    }
    function decrease(){
        setCart(cart-1);
        setValue((cart-1)*item.price);
    }

    function showCart(){
        if(cart){
            return (
                <div className="flex items-center justify-center text-center ">
                  <p onClick={decrease} className="bg-orange-500 w-6 p-1 rounded-l-md">
                    -
                  </p>
                  <p className="bg-white w-6 p-1 ">
                    {cart}
                  </p>
                  <p onClick={increase} className="bg-orange-500 w-6 p-1 rounded-r-md">
                    +
                  </p>
                </div>
            )
        }
        return (
                <p onClick={increase} className="bg-orange-500 text-white p-1 rounded-lg flex items-center">
                  <BiCartAdd/> Add 
                </p>
        )
    }
    return (
        <>
          <div key={index} className="border shadow-lg rounded-lg hover:scale-105 duration-300 rounded-t-lg">
            <img src={item.image} alt={item.name}
                className="w-full h-[200px] object-cover rounded-t-lg"
            />
            
            <div className="flex items-center justify-between px-2 py-4">
                <p>
                    <span className="bg-orange-500 text-white p-1 rounded-lg">₹{item.price}</span>
                </p>
                <p className="font-bold">{item.name}</p>
                <div className="cursor-pointer">
                  {showCart()}
                </div>
                <p>{value}</p>
            </div>
           </div>
        </>
    );
}

export default Card;