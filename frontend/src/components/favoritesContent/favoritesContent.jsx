import { useEffect,useState } from 'react';
import './favoritesContent.css'
import axios from 'axios';
import { useSelector } from 'react-redux';
import Menuitem from '../menuItem/menuItem';
import Viewbasket from '../viewBasket/viewBasket';
const Favoritescontent = () => {
    const url = useSelector(state=>state.user.url);
    const user = useSelector(state=>state.user.user)
    const favorites = useSelector(state=>state.user.user.favorites);
    const [favoritesList,setFavoriteslist] = useState([]);

    useEffect(()=>{
        if(Object.keys(user).length!==0 && favorites.length!==0){
            Promise.all(favorites.map(id=>{
                return axios.get(`${url}/menus/single/${id}`)
            })).then(res=>{
                setFavoriteslist(res);
            }).catch(error=>{
                console.error(error);
            })
        }        
    },[favorites])

    return(
        <div className="favoritesContent">
            <div className='favoritesContainer'>
                <h2>Favorites</h2>
                <div>
                    {favoritesList && favoritesList.map(favorite=>{
                        return <Menuitem key={favorite.data._id} menu={favorite.data}/>
                    })}
                </div>
            </div>
            <Viewbasket/>
        </div>
    )
}
export default Favoritescontent;