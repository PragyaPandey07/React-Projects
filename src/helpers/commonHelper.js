export const filterSearch = (searchText, restaurants) =>{
    let filtered = restaurants.filter((res)=>(
         res?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase())
    ))
    return filtered;
}