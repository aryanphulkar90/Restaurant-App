import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { clearCart } from "../utils/cartSlice"
import ItemList from "./ItemList"

const Cart = () =>{
    const cartItems = useSelector((store)=>store.cart.items)
    
    const dispatch = useDispatch()

    const handleClearCart = () =>{
        dispatch(clearCart())
    }

    return (
    <div className="text-center m-4 mx-auto p-4 w-6/12 bg-gray-50 shadow-lg">
        <h1 className="text-2xl font-bold">Cart</h1>
        <div>
        <button className="p-2 m-2 bg-black text-white rounded-lg"
         onClick={handleClearCart}>
            Clear Cart
        </button>
        <ItemList items={cartItems}></ItemList>
        </div>
    </div>
    )
}

export default Cart