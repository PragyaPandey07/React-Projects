import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) =>{
const {resData} = props;

const {name, cuisines, costForTwo, avgRating, sla, cloudinaryImageId} = resData?.info;
return(
<div className="res-card">
<img className="res-img" alt={`${name} img`} src={CDN_URL + cloudinaryImageId}/>
<h3>{name}</h3>
<div>{cuisines.join(", ")}</div>
<div>{costForTwo}</div>
<span>{avgRating} stars  • {sla.deliveryTime} mins</span>

</div>
)
}

export default RestaurantCard;