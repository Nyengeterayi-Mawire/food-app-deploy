import Currentorders from '../currentOrders/currentOrders';
import Pastorders from '../pastOrders/pastOrders';
import './ordersContent.css';
const Orderscontent = () => {
    return (
        <main className="ordersContent">
            <Currentorders/>
            <Pastorders/>
        </main>
    )
} 
export default Orderscontent;