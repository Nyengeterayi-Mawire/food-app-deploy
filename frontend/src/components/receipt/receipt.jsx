import { useSelector } from 'react-redux';
import { setDisplayReceipt } from '../../features/order';
import Closewidget from '../closeWidget/closeWidget';
import './receipt.css';
import Receiptorder from '../receiptOrder/receiptOrder';
import { useEffect } from 'react';

const Receipt = () => {
    const display = useSelector(state=>state.order.displayReceipt);
    const {apartmentNumber,buildingNumber,streetName,fullName,email,cancelled,id,menus,createdAt} = useSelector(state=>state.order.receipt);

    return (
        <main className={`receipt ${display?'show':'hide'}`}>
            <section className='formSection'>
                <form className='receiptForm'>
                    <h3>Receipt</h3> 
                    <div className='orderItems'>
                        {menus && menus.map((menu,index)=>{
                            return <Receiptorder key={id}
                                name={menu.menuItem.name} 
                                price={menu.menuItem.price} 
                                quantity={menu.quantity}
                            />
                        })}
                        <div className='receiptTotalContainer'>
                            <p className='receipttotalPriceLabel'>Total :</p>
                            {menus && <p className='receipttotalPrice'>${menus.reduce((acc,menu)=>acc+=(menu.menuItem.price*menu.quantity),0).toFixed(2)}</p>}
                        </div>
                    </div>
                    <div className='deliveryInfo'>
                        <fieldset className='deliveryCustomerInfo'>
                            <legend>Customer </legend>
                            <p className='deliveryInfoText'>{fullName}</p>
                            <p className='deliveryInfoText'>{email}</p> 
                        </fieldset>
                        <fieldset className='deliveryAddressInfo'>
                            <legend>Address</legend>
                            <p className='deliveryInfoText'>ul {streetName} ,</p>
                            <p className='deliveryInfoText'>{buildingNumber} / </p> 
                            <p className='deliveryInfoText'>{apartmentNumber}</p> 
                            
                        </fieldset>
                                               
                    </div>
                </form> 
                <Closewidget displayFunction={setDisplayReceipt}/>
            </section>
        </main>
    )
}
export default Receipt;