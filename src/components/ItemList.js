import React from "react"
import { useDispatch } from "react-redux"
import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants"

const ItemList = ({items}) =>{
    
    const dispatch = useDispatch();
    const handleAddItem = (item) =>{
        dispatch(addItem(item))
    }

    return (
        <div>
            {items.map((item)=>(
                <div 
                data-testid="foodItems"
                key={item?.card?.info?.id} 
                className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
                <div className="w-9/12">
                    <div className="py-2">
                        <span>{item?.card?.info?.name}</span>  
                        <span>- ₹ {item?.card?.info?.price ? (item?.card?.info?.price/100) : (item?.card?.info?.defaultPrice/100) }</span>         
                    </div>
                    <p className="text-xs">{item?.card?.info?.description}</p> 
                </div>
                <div className="py-4 pl-4 w-3/12">
                   <div className="absolute ml-[55px] mt-[102px]">
                        <button className="text-xs bg-white p-2 shadow-lg rounded-2xl" onClick={()=>handleAddItem(item)}>
                            Add +
                        </button>
                   </div>
                   <div className="h-[157px]">
                   <img src={CDN_URL + item?.card?.info?.imageId} className="w-full rounded-3xl"/>   
                   </div>
                </div>
                </div>
            ))}
        </div>
    )
}

export default ItemList