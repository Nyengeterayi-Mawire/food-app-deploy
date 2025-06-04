import { useDispatch } from 'react-redux';
import './order.css'
import { setDisplayReceipt, setReceipt } from '../../features/order';
const Order = ({apartmentNumber,buildingNumber,streetName,fullName,email,cancelled,id,menus,createdAt}) => {
    const dispatch = useDispatch();
    return (
        <main className="order" onClick={()=>{
            dispatch(setReceipt({apartmentNumber,buildingNumber,streetName,fullName,email,cancelled,id,menus,createdAt}));
            dispatch(setDisplayReceipt());
        }}>
            <h3>{id}</h3>
            <h3>23 September</h3>
            <h3>12:24</h3> 
            
        </main>
    )
};
export default Order;