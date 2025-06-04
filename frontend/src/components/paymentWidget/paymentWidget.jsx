import { useState } from 'react';
import Closewidget from '../closeWidget/closeWidget';
import './paymentWidget.css'
import { useSelector,useDispatch } from 'react-redux';
import { setDisplayBasket, setDisplayPayment } from '../../features/menu';
import axios from 'axios';
import { addOrder, setSuccessNotification } from '../../features/order';
const Paymentwidget = () => {
    const display = useSelector(state=>state.menu.displayPayment);
    const url = useSelector(state=>state.user.url);
    const customerInfo = useSelector(state=>state.order.customer);
    const menuList = useSelector(state=>state.menu.basket);
    const dispatch = useDispatch();

    const [cardInfo,setCardInfo] = useState({name:'',number:0,expiryDate:'',cvv:0});
    const [nameError,setNameError] = useState(false);
    const [numberError,setNumberError] = useState(false);
    const [dateError,setDateError] = useState(false); 
    const [cvvError,setCvvError] = useState(false); 
    

    const handleInput = (e) => {
        setCardInfo(state=>state={...state,[e.target.name]:e.target.value});
    };

    const hadnleCheckout = (e) => {
        e.preventDefault();
        setCvvError(false);
        setDateError(false);
        setNameError(false);
        setNumberError(false);
        if(cardInfo.name.trim()===''){
            setNameError(true);
        }else if(cardInfo.number.length !== 16){
            setNumberError(true);
        }else if(cardInfo.expiryDate.trim()===''){
            setDateError(true);
        }else if(cardInfo.cvv.length!==3){
            setCvvError(true);
        }else{
            console.log(cardInfo);
            axios.post(`${url}/orders/`,{...customerInfo,menus:menuList}).then(res=>{
                if(res.data.error){
                    console.error(res.data.error);
                }else{
                    dispatch(addOrder(res.data)); 
                    dispatch(setDisplayPayment());
                    dispatch(setDisplayBasket());
                    dispatch(setSuccessNotification());
                }
            });
        }
        
    }
    return(
        <main className={`paymentWidget ${display ? 'show' : 'hide'}`}>
            <section className='formSection'>
                <form className="paymentForm" onSubmit={hadnleCheckout}>
                    <h2 className='paymentFormHeader'>Payment</h2> 
                    <div className="creditCardInfoContainer">
                        <div className="inputContainer">
                            <label className='inputLabel'>Cardholder Full Name</label> 
                            <input className='paymentInput' 
                            placeholder='Enter cardholders full name' 
                            name='name'
                            type='text'
                            onChange={handleInput} 
                            style={nameError?{border:'2px solid red'}:{border:'2px solid transparent'}}/>
                        </div>
                        <div className="inputContainer">
                            <label className='inputLabel'>Card Number</label> 
                            <input className='paymentInput'
                            placeholder='0000 0000 0000 0000'
                            name='number'
                            type='number'
                            onChange={handleInput}
                            style={numberError?{border:'2px solid red'}:{border:'2px solid transparent'}}/>
                        </div>
                        <div className="flex">
                            <div className="inputContainer" id="flexInputContainer">
                                <label className='inputLabel'>Expiry Date</label> 
                                <input className='paymentInput' 
                                placeholder='01/12'
                                name='expiryDate'
                                type='text'
                                onChange={handleInput}
                                style={dateError?{border:'2px solid red'}:{border:'2px solid transparent'}}/>
                            </div>
                            <div className="inputContainer" id="flexInputContainer">
                                <label className='inputLabel'>CVV</label> 
                                <input className='paymentInput'
                                placeholder='000'
                                name='cvv'
                                type='number'
                                onChange={handleInput}
                                style={cvvError?{border:'2px solid red'}:{border:'2px solid transparent'}}/>
                            </div>
                        </div> 
                        
                    </div> 
                    <div className='paymentCheckoutContainer'>
                        <button className='checkoutButton' type='submit'>Checkout</button>
                    </div>
                </form>
                <Closewidget displayFunction={setDisplayPayment}/>
            </section>   

           
        </main>
    )
};
export default Paymentwidget;