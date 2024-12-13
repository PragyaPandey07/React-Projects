import RestaurantCard from "./RestaurantCard";
import SearchBar from "./SearchBar";
import { filterSearch } from "../helpers/commonHelper";
import resObj from "../utils/mockData";
import { useState } from "react";

const Body = () =>{
    const [allRestaurants, setAllRestaurants] = useState(resObj);
    const [restaurantList, setRestaurantList] = useState(resObj);
    const [searchText, setSearchText] = useState("");

    const updateSearchText = (event) =>{
        setSearchText(event.target.value);
    }
    
    const handleSearch = () =>{
        let searchFilter = filterSearch(searchText,allRestaurants);
        setRestaurantList(searchFilter);
    }

    return(
        <div className="body">
            <SearchBar updateSearchText={updateSearchText} handleSearch={handleSearch}/>
            <div className="filters">
                <button className="top-rated" onClick={()=>{
                            list = allRestaurants.filter((restaurant) => restaurant.info.avgRating >= 4.5);
                            setRestaurantList(list);
                }}>Top Rated</button>
            </div>
            <div className="res-container">
                {restaurantList.map((restaurant) =>(
                    <RestaurantCard resData={restaurant} key={restaurant.info.id}/>
                ))}
            </div>
        </div>
    )
}

export default Body;