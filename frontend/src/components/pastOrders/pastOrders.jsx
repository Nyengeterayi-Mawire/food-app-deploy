import { useEffect } from 'react';
import './pastOrders.css';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import { setOrderList } from '../../features/order';
import Order from '../order/order';

const Pastorders = () => {
    const email = useSelector(state=>state.user.user.email);
    const url = useSelector(state=>state.user.url);
    const orders = useSelector(state=>state.order.orderList);
    const dispatch = useDispatch();

    useEffect(()=>{
        axios.get(`${url}/orders/${email}`).then(res=>{
            dispatch(setOrderList(res.data));
        })
    },[])
    
    return (
        <main className="currentOrders">
           <h2>Past Orders</h2>
           <div className='ordersList'>
                {orders && orders.map((order,index)=>{
                    return <Order key={order._id} 
                    apartmentNumber={order.apartmentNumber}
                    buildingNumber={order.buildingNumber}
                    streetName={order.streetName}
                    fullName={order.fullName}
                    email={order.email}
                    cancelled ={order.cancelled}
                    menus={order.menus}
                    id={order._id} 
                    createdAt={order.createdAt}
                    />
                })}
           </div>
            
        </main>
    )
} 
export default Pastorders;