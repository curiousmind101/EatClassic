import React, {useState}from "react";
import { data } from "../Data/data";
const Food = ()=>{

    const [foods, setFoods] = useState(data);

    const filterType =(category) =>{
        setFoods(data.filter((item)=>{
            return item.category === category;
          })
        );
    };

    const filterPrice =(price1, price2) =>{
        setFoods(data.filter((item)=>{
            return item.price <= price2 && item.price >= price1;
          })
        );
    };
    const [Limit, setLimit] = useState(8);
    return (
            <div className="max-w-[1620px] m-auto px-4 py-12">
               <h1 className="text-orange-600 font-bold text-4xl text-center">Top Rated Menu Items</h1>
               {/**Filter Row */}
               <div className="flex flex-col lg:flex-row justify-between">
                    <div>
                       {/**Filter type */}
                       <p className="font-bold text-gray-700">Filter Type</p>
                       <div className="flex justify-between flex-wrap gap-2">
                         <button onClick={()=>{setFoods(data); setLimit(100)}} className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">All</button>
                         <button onClick={()=>{filterType("paneer"); setLimit(100)}} className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">Paneer</button>
                         <button onClick={()=>{filterType("Chicken"); setLimit(100)}} className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">Chicken</button>
                         <button onClick={()=>{filterType("biryani"); setLimit(100)}} className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">Biryani</button>
                         <button onClick={()=>{filterType("bread"); setLimit(100)}} className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">Bread</button>
                         <button onClick={()=>{filterType("sweets"); setLimit(100)}} className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">Sweets</button>
                       </div>
                    </div>
                    <div>
                       {/**Filter Price */}
                       <p className="font-bold text-gray-700 ">Filter Price</p>
                       <div className="flex justify-between max-w-[800px] w-full gap-2">
                         <button onClick={()=>filterPrice(0, 100)} className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">Rs. 0-100 </button>
                         <button onClick={()=>filterPrice(100, 300)} className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">Rs. 100-300</button>
                         <button onClick={()=>filterPrice(300, 400)} className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">Rs. 300-400 </button>
                         <button onClick={()=>filterPrice(400, 500)} className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">Rs. 400-500</button>
                       </div>
                    </div>
               </div>
               <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
                {foods.slice(0, Limit).map((item, index)=>(
                    <div key={index} className="border shadow-lg rounded-lg hover:scale-105 duration-300 rounded-t-lg">
                        <img src={item.image} alt={item.name}
                            className="w-full h-[200px] object-cover rounded-t-lg"
                        />
                        <div className="flex justify-between px-2 py-4">
                            <p className="font-bold">{item.name}</p>
                            <p>
                                <span className="bg-orange-500 text-white p-1 rounded-full">₹{item.price}</span>
                            </p>
                        </div>
                    </div>
                ))}
               </div>
            </div>
    );
}
export default Food;