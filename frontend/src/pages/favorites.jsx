import Sidebar from "../components/sidebar/sidebar";
import Menuitemwidget from "../components/menuItemWidget/menuItemWidget";
import Paymentwidget from "../components/paymentWidget/paymentWidget";
import Customerinfowidget from "../components/customerInfoWidget/customerInfoWidget";
import Topnav from "../components/topnav/topnav";
import Orderscontent from "../components/ordersContent/ordersContent";
import Receipt from "../components/receipt/receipt";
import Ordernotification from "../components/orderNotification/orderNotification";
import Favoritescontent from "../components/favoritesContent/favoritesContent";
import Basketwidget from "../components/basketWidget/basketWidget";
import Viewbasket from "../components/viewBasket/viewBasket";
const Favorites = () => {
    return (
        <main className="favoritesPage">
            <Topnav/>
            <Sidebar/>
            <Favoritescontent/>
            {/* <Orderscontent/> */}
            <Menuitemwidget/>
            <Basketwidget/>            
            <Paymentwidget/>
            <Customerinfowidget/>
            {/* <Receipt/> */}
            <Ordernotification/>

            
        </main>
    )
} 
export default Favorites;