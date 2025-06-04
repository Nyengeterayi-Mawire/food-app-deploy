import { useDispatch, useSelector } from 'react-redux';
import { setDisplayCustomerWidget, setDisplayPayment } from '../../features/menu';
import Closewidget from '../closeWidget/closeWidget';
import './customerInfoWidget.css';
import { useState } from 'react';
import { setCustomer } from '../../features/order';
const Customerinfowidget = () => {
    const display = useSelector(state=>state.menu.displayCustomerWidget); 
    const dispacth = useDispatch();
    const [customerInfo,setCustomerInfo] = useState({fullName : '',email:'',streetName:'',buildingNumber:'',apartmentNumber:''});
    const [errorName,setErrorName] = useState(false);
    const [emailError,setEmailError] = useState(false);
    const [streetNameError,setStreetNameError] = useState(false);
    const [buildingError,setbuildingError] = useState(false);
    const [apartmentError,setapArtmentError] = useState(false);

    const handleInput = (e) => {
        setCustomerInfo(state=>state={...state,[e.target.name]:e.target.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault();  
        setEmailError(false);
        setErrorName(false);
        setStreetNameError(false);
        setbuildingError(false);
        setapArtmentError(false);
        if(customerInfo.fullName.trim()===''){
            setErrorName(true)
        }else if(customerInfo.email.trim()===''){
            setEmailError(true);
        }else if(customerInfo.streetName.trim()===''){
            setStreetNameError(true);
        }else if(customerInfo.buildingNumber.trim()===''){
            setbuildingError(true);
        }else if(customerInfo.apartmentNumber.trim()===''){
            setapArtmentError(true);
        }else{
            dispacth(setCustomer(customerInfo));
            dispacth(setDisplayCustomerWidget());
            dispacth(setDisplayPayment());
        }
        
    }
    return (
        <main className={`customerInfoWidget ${display?'show':'hide'}`}>
             <section className='formSection'>
                <form className="customerForm" onSubmit={handleSubmit}>
                    <h1>Customer</h1>
                    <div className="inputContainer">
                        <label className="inputLabel">Full Name</label>
                        <input className="customerInput"
                        placeholder='John Doe' 
                        name='fullName'
                        type='text'
                        onChange={handleInput} 
                        style={errorName?{border:'2px solid red'}:{border:'2px solid transparent'}}/>
                    </div>
                    <div className="inputContainer">
                        <label className="inputLabel">Email</label>
                        <input className="customerInput" 
                        placeholder='johndoe@gmail.com' 
                        name='email'
                        type='email'
                        onChange={handleInput} 
                        style={emailError?{border:'2px solid red'}:{border:'2px solid transparent'}}/>
                    </div>
                    <div className="inputContainer">
                        <label className="inputLabel">Street Name</label>
                        <input className="customerInput"
                        placeholder='Enter the street name' 
                        name='streetName'
                        type='text'
                        onChange={handleInput} 
                        style={streetNameError?{border:'2px solid red'}:{border:'2px solid transparent'}}/>
                    </div>
                    <div className="flex">
                        <div className="inputContainer" id="flexInputContainer">
                            <label className="inputLabel">Building Number</label>
                            <input className="customerInput" 
                            placeholder='' 
                            name='buildingNumber'
                            type='text'
                            onChange={handleInput} 
                            style={buildingError?{border:'2px solid red'}:{border:'2px solid transparent'}}/>
                        </div>
                        <div className="inputContainer" id="flexInputContainer">
                            <label className="inputLabel">Apartment Number</label>
                            <input className="customerInput" 
                            placeholder='' 
                            name='apartmentNumber'
                            type='text'
                            onChange={handleInput} 
                            style={apartmentError?{border:'2px solid red'}:{border:'2px solid transparent'}}/>
                        </div>
                    </div>
                    <div className='paymentCheckoutContainer'>
                        <button className='checkoutButton' type='submit'>Continue</button>
                    </div>
                </form>
                <Closewidget displayFunction={setDisplayCustomerWidget}/>
             </section>
        </main>
    )
}
export default Customerinfowidget;