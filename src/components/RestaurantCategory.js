import React from "react"
import ItemList from "./ItemList"

const RestaurantCategory = ({data, showItems, setShowItems}) =>{
  const handleClick = () =>{
    if(showItems!=data.title) setShowItems(data.title)
    else setShowItems("Nothing")
  }
  return (
    <div>
        <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
            <div 
            className="flex justify-between cursor-pointer"
            onClick={handleClick}
            >
                <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
                <span>↓</span>
            </div>
            {(showItems==data.title) && <ItemList items={data.itemCards}/>}
        </div>
    </div>
  )
}

export default RestaurantCategory