import React from 'react'
import { Cart } from './Cart'
import { useState } from 'react';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';

const CartComponent = ({cartCount,setCount}) => {
    const [cartState,setCart] = useState(Cart);
    function RemoveItem(id){
        const newArray = cartState.filter((element)=>element.id!=id)
        setCart(newArray);
        setCount(prevousValue=>prevousValue-1);
    }
    return (
        <div className='h-full w-full flex space-y-10 bg-yellow-300'>
            {
                cartState && 
                <div>
                    {
                        cartState.map((element,index)=>{
                            return(
                                <div key={index} className='h-60 w-100 border-2 border-green-500 flex justify-center items-center flex-col'> 
                                    <img src={element.image} className="h-50 w-40 "/>
                                    <div className='w-full h-full bg-green-400'>
                                        <button onClick={()=>RemoveItem(element.id)} className='bg-red-300'>Remove Item</button>
                                    </div>
                               </div>
                            )
                        })
                    }
                </div>
            }
        </div>
    )
}

export default CartComponent
