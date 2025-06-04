import { useDispatch, useSelector } from "react-redux"
import './basketWidget.css'
import { setDisplayBasket } from "../../features/menu";
const Basketwidget = () => {
    const basket = useSelector(state=>state.menu.basket);
    const dispatch = useDispatch()
    
    return (
        <main className={`basketWidgetContainer ${basket.length!==0 ? 'show' : 'hide'}  `}>
            <button className="basketWidget" onClick={()=>dispatch(setDisplayBasket())}>
                <p>{`(${basket.length})`}</p> 
                <p>View Basket</p>
            </button>
        </main>        
    )
}
export default Basketwidget;