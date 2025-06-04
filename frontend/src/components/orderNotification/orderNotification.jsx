import { useDispatch, useSelector } from 'react-redux';
import './orderNotification.css'
import { useEffect } from 'react';
import { setSuccessNotification } from '../../features/order';
import { FaCheck } from "react-icons/fa";

const Ordernotification = () => {
    const display = useSelector(state=>state.order.successNotification);
    const dispatch = useDispatch();
    useEffect(()=>{
        if(display){
            setTimeout(()=>{
                dispatch(setSuccessNotification());
            },4000)
        }        
    },[display])
    return (
        <main className={`orderNotification ${display ? 'show' : 'hide'}`}>
            <div className="notification" id='success'>
                <div className='notificationIcon'><FaCheck size={'1.5em'}/></div>
                <p className='notificationText'>Successfully placed order</p>
            </div>
        </main>
    )
}
export default Ordernotification;