import React from "react";
import {useState} from "react"
import Shimmer from "./Shimmer";
import RestaurantCategory from "./RestaurantCategory";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () =>{
  const {resId} = useParams()
  const [showCategory, setShowCategory] = useState("Nothing")
  const resInfo = useRestaurantMenu(resId)

  if(resInfo===null) return <Shimmer/>
  const {name, cuisines, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info 
  const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((c)=>c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
  return (
        <div className="text-center">
           <h1 className="font-bold text-2xl my-6">{name}</h1>
           <h2 className="font-bold text-lg">{cuisines.join(", ")} - {costForTwoMessage}</h2>
           {
              categories.map((category)=>{ 
                  return (
                    <div>
                      {<RestaurantCategory key={category?.card?.card?.title} data={category?.card?.card} showItems={showCategory} setShowItems={setShowCategory}/>}
                    </div>
                  )
              })
           }
        </div>
    )
}

export default RestaurantMenu