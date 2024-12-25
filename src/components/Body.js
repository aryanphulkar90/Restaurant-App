import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer"
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
    const [listofRestaurants, setListofRestaurants] = useState([])
    const [filteredRestaurants, setFilteredRestaurants] = useState([])
    const [searchText, setSearchText] = useState("")
    useEffect(()=>{
        fetchdata();
    },[]);
    const {loggedInUser, setUserName} = useContext(UserContext)
    const fetchdata = async () =>{
         const data = await fetch("https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4828694&lng=78.59092389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");        
         const json = await data.json()
         setListofRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
         setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants) 
    }    
    
    const onlineStatus = useOnlineStatus()

    if(onlineStatus===false) return <h1>You are Offline</h1>

    return (listofRestaurants?.length===0) ? 
     (<Shimmer/>) 
     :
     (
      <div className="body">
        <div className="filter flex">
            <div className="search ml-[80px] m-1 p-1">
                <input 
                  type="text" 
                  data-testid = "searchInput"
                  className="border border-solid border-black" 
                  value={searchText}
                  onChange={(e)=>{
                    setSearchText(e.target.value)
                  }}
                />
                <button 
                  className="px-4 py-2 bg-green-100 m-4 rounded-lg"
                  onClick={()=>{
                    let newList = listofRestaurants?.filter((res)=>{
                        return (res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                    })
                    setFilteredRestaurants(newList)
                  }}
                >Search
                </button>
                <button 
                className="filter-btn px-4 py-2 bg-gray-100 rounded-lg" 
                onClick={()=>{
                    let tempList = listofRestaurants?.filter((res)=>(res.info.avgRating>4.5))
                    setFilteredRestaurants(tempList)
                }}
                >
                Top Rated Restaurants
            </button>
            <input 
                  type="text" 
                  className="border border-solid border-black m-2 p-1" 
                  value={loggedInUser}
                  onChange={(e)=>{
                    setUserName
                    (e.target.value)
                  }}
            />
            </div>
         </div>
         <div data-testid="mainbox" className="res-container flex flex-wrap justify-center">
          {
              filteredRestaurants?.map((restaurant) => {
              return (
                  <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
                      <RestaurantCard resData={restaurant}/>
                  </Link>
              )}
            )
          }
         </div>
      </div>
    )
  }

  export default Body;