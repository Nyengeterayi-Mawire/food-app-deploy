import './menuContent.css'
import burgerImage from '../../assets/burger png.png';
import Menulist from '../menuList/menuList';
// import Menuitemwidget from '../menuItemWidget/menuItemWidget';
import Basketwidget from '../basketWidget/basketWidget';
import Categorylist from '../categoryList/categoryList';
import Viewbasket from '../viewBasket/viewBasket';
import Paymentwidget from '../paymentWidget/paymentWidget';
import { useRef } from 'react';
const Menucontent = () => {
    const burgersRef = useRef(null); 
    const pizzasRef = useRef(null);
    const bowlsRef = useRef(null);
    const iceCreamsRef = useRef(null);
    const drinksRef = useRef(null);
    return (        
            <section className="menuContent">                            
                <Categorylist 
                burgersRef={burgersRef}
                pizzasRef={pizzasRef} 
                bowlsRef={bowlsRef}
                iceCreamsRef={iceCreamsRef}
                drinksRef={drinksRef}
                />               
                <section className="searchSection">
                    <input className='searchInput'/>
                </section>  
                <Menulist 
                burgersRef={burgersRef}
                pizzasRef={pizzasRef}
                bowlsRef={bowlsRef}
                iceCreamsRef={iceCreamsRef}
                drinksRef={drinksRef}
                /> 
                <Basketwidget/>
                <Viewbasket/>   
                                
            </section> 
            
        
    )
}
export default Menucontent;