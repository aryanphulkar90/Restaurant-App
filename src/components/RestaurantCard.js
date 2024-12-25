import React from "react"
import { CDN_URL } from "../utils/constants"
import UserContext from "../utils/UserContext"
import {useContext} from "react"

const RestaurantCard = (props) => {
    const {resData} = props
    const {name, avgRating, sla, cuisines, costForTwo, cloudinaryImageId} = resData?.info
    const {loggedInUser} = useContext(UserContext)
    return (
      <div data-testid = "resCard" className="m-4 p-4 w-[250px] h-[500px] rounded-3xl bg-gray-100 hover:bg-gray-200 break-words break-keep">
        <img
         className="res-logo rounded-3xl h-[200px] w-[250px]"
         alt="Restaurant Image"
         src={CDN_URL + cloudinaryImageId} 
        />
        <h3 
         className="font-bold py-4 text-lg"
        >{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>Delivery in {sla.deliveryTime} minutes</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
      </div>
    )
}

export default RestaurantCard;