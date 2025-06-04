import Sidebar from "../components/sidebar/sidebar";
import Menuitemwidget from "../components/menuItemWidget/menuItemWidget";
import Paymentwidget from "../components/paymentWidget/paymentWidget";
import Customerinfowidget from "../components/customerInfoWidget/customerInfoWidget";
import Topnav from "../components/topnav/topnav";
import Orderscontent from "../components/ordersContent/ordersContent";
import Receipt from "../components/receipt/receipt";
import Ordernotification from "../components/orderNotification/orderNotification";
const Orderspage = () => {
    return (
        <main className="ordersPage">
            <Topnav/>
            <Sidebar/>
            <Orderscontent/>
            {/* <Menuitemwidget/>
            <Paymentwidget/>
            <Customerinfowidget/> */}
            <Receipt/>
            <Ordernotification/>

            
        </main>
    )
} 
export default Orderspage;