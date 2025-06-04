import { useDispatch, useSelector } from "react-redux";
import './viewBasket.css';
import Basketitem from "../basketItem/basketItem";
import Closewidget from "../closeWidget/closeWidget";
import { useEffect,useState } from "react";
import { setDisplayBasket, setDisplayCustomerWidget, setDisplayPayment } from "../../features/menu";
const Viewbasket = () => {
    const basketItems = useSelector(state=>state.menu.basket);
    const display = useSelector(state=>state.menu.displayBasket);
    const dispacth = useDispatch();
    const [total,setTotal] = useState(0.00);

    useEffect(()=>{ 
        setTotal(basketItems.reduce((acc,basketItem)=>acc+=(basketItem.menuItem.price * basketItem.quantity),0))        
    },[basketItems]);

    return (
        <main className={`viewBasket ${display ? 'show' : 'hide'}`}>
            <h1>View Basket</h1> 
            <section className="basketItemsListSection">
                {basketItems && basketItems.map((basketItem,index)=>{
                    return <Basketitem key={basketItem.menuItem._id}
                    name={basketItem.menuItem.name}
                    price={basketItem.menuItem.price}
                    _id={basketItem.menuItem._id}
                    quantity={basketItem.quantity}
                    index={index}/>
                })}
            </section>
            <footer> 
                <div className="totalSection">
                    <p className="totalLabel">Total</p>
                    <p className="totalPrice">${total.toFixed(2)}</p>
                    {/* <p className="totalPrice">${ basketItems.reduce((acc,basketItem)=>acc+=(basketItem.menu.price * basketItem.quantity),0)}</p> */}
                </div>  
                <div className="submitSection">
                    <button type='submit'
                    className='addToBasketButton'
                    onClick={()=>dispacth(setDisplayCustomerWidget())}>Checkout</button>
                </div>               
            </footer> 
            <Closewidget displayFunction={setDisplayBasket}/>
        </main>
    )
}
export default Viewbasket;