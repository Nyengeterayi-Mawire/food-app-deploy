import './sidebar.css';
import { IoMdHome } from "react-icons/io";
import { FaBookmark } from "react-icons/fa";
import { FaReceipt } from "react-icons/fa6";
import { IoLogOut } from "react-icons/io5";
import { MdOutlineFavorite } from "react-icons/md";
import Logo from '../logo/logo';
import { useDispatch, useSelector } from 'react-redux';
import Closewidget from '../closeWidget/closeWidget';
import { setBasket, setDisplaySidebar } from '../../features/menu';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { setUser } from '../../features/user';
const Sidebar = () => {
    const display = useSelector(state=>state.menu.displaySidebar);
    const dispatch = useDispatch();

    const [activeHome,setActiveHome] = useState(false);
    const [activeOrders,setActiveOrders] = useState(false);
    const [activeFavorites,setActiveFavorites] = useState(false);

    return (
        <main className={`sidebar ${display?'show':'hide'}`}>
            <div className='logoSection'>
                <Logo/>
            </div> 
            <div className='routes'>  
                <div>
                    <Link to='/home' className='links' onClick={()=>{
                        setActiveHome(true);
                        setActiveFavorites(false);
                        setActiveOrders(false);
                        dispatch(setDisplaySidebar());
                    }} >
                        <div className='route'>
                            <IoMdHome size={'1.5em'} color='#7db0de'/>
                            <p>Menu</p> 
                            <div className={`activeLinkIcon ${activeHome ? 'show':'hide'}`}></div>
                        </div>
                    </Link>
                    
                    <Link to='/orders' className='links' onClick={()=>{
                        setActiveOrders(true);
                        setActiveHome(false);
                        setActiveFavorites(false);
                        dispatch(setDisplaySidebar());
                        
                    }}>
                        <div className='route'>
                            <FaReceipt />
                            <p>Orders</p>
                            <div className={`activeLinkIcon ${activeOrders ? 'show':'hide'}`}></div>
                        </div>
                    </Link>
                    
                    <Link to='/favorites' className='links' onClick={()=>{
                        setActiveHome(false);
                        setActiveFavorites(true);
                        setActiveOrders(false);
                        dispatch(setDisplaySidebar());
                    }}>
                        <div className='route'>
                            <MdOutlineFavorite />
                            <p>Favorites</p>
                            <div className={`activeLinkIcon ${activeFavorites ? 'show':'hide'}`}></div>
                        </div>
                    </Link>
                </div>
                <div style={{justifyContent:'flex-end'}}>
                    <Link to='/login' className='links' onClick={()=>{
                        setActiveHome(false);
                        setActiveFavorites(false);
                        setActiveOrders(false);
                        dispatch(setDisplaySidebar());
                        dispatch(setUser({user:{},token:''})); 
                        dispatch(setBasket([]));
                    }}>
                        <div className='route'>
                            <IoLogOut size={'1.2em'} />
                            <p>Logout</p>
                            <div className={`activeLinkIcon ${activeFavorites ? 'show':'hide'}`}></div>
                        </div>
                    </Link>
                </div>
                
            </div> 
            <Closewidget displayFunction={setDisplaySidebar}/>
        </main>
    )
}
export default Sidebar;