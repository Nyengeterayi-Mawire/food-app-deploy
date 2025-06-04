import { useEffect, useRef, useState } from "react";
import { useSelector,useDispatch} from 'react-redux';
import axios from 'axios';
import './menuList.css';
import { setDisplayMenuItem, setMenuItem } from "../../features/menu";
import Menuitem from "../menuItem/menuItem";

const Menulist = ({burgersRef,pizzasRef,bowlsRef,iceCreamsRef,drinksRef}) => {
    const url = useSelector(state=>state.user.url);
    const dispacth = useDispatch();
    const [menuItems,setMenuItems] = useState([]); 
    const [showBurgers,setShowBurgers] = useState(false);
    const check = useRef(null);

    useEffect(()=>{
        axios.get(`${url}/menus/category`).then(res=>{
            if(res.data.error){
                console.log(res.data.error)
            }else{
                setMenuItems(res.data)
            }
        })
    },[]);

    const handleScroll = (ref) => {
        ref.current.scrollIntoView({
            behavior: "smooth", // Smooth scrolling
            block: "start", // Align to the top of the section
          });
    }

   const handleRef=(id)=>{
        if(id==='Burgers'){
            return burgersRef;
        }else if(id==='Pizzas'){
            return pizzasRef
        }else if(id==='Bowls'){
            return bowlsRef
        }else if(id==='Icecreams'){
            return iceCreamsRef
        }else if(id==='Drinks'){
            return drinksRef
        }
   }

   const handleViewAll = (id) =>{
        if(id==='Burgers'){
            burgersRef.current.style.height = 'fit-content';
        }else if(id==='Pizzas'){
            pizzasRef.current.style.height = 'fit-content';
        }else if(id==='Bowls'){
            bowlsRef.current.style.height = 'fit-content';
        }else if(id==='Ice cream'){
            iceCreamsRef.current.style.height = 'fit-content';
        }else if(id==='Drinks'){
            drinksRef.current.style.height = 'fit-content';
        }
    }
   

    return (
        <main className="menuList">
            {
                menuItems && menuItems.map((menuItem,index)=>{
                    return <section id={`${menuItem._id}`} className={`menuCategory ${showBurgers?'show':'hide'}`} key={index}>
                        <div ref={handleRef(menuItem._id)} className={`menuListCollapse ${showBurgers?'show':'hide'}` } id={`${menuItem._id}`}>
                            <h2>{menuItem._id}</h2>
                            {menuItem.items && menuItem.items.map(menu=>{
                                return <Menuitem key={menu._id} menu={menu}/>
                            })} 
                        </div>                        
                        <p className="viewAllLink" onClick={()=>handleViewAll(menuItem._id)}>View all...</p>
                    </section>
                })
            }
           
        </main>
    )
}
export default Menulist;