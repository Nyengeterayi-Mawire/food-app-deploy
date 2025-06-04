import { useDispatch, useSelector } from "react-redux";
import { setDisplayMenuItem, setMenuItem } from "../../features/menu";

const Menuitem = ({menu}) => {
    const url = useSelector(state=>state.user.url)
    const dispatch = useDispatch();
    const handleSelect = (menuItem) => {        
        dispatch(setMenuItem(menuItem))
        dispatch(setDisplayMenuItem())
    }    
    return (
        <section className="menuItemContainer" key={menu._id}>
            <section className='menuItem'  onClick={()=>handleSelect(menu)}>
                <img className='menuItemImage' src={`${url}/${menu.image}`}/>
                <section className="menuItemDescriptionSection">
                    <h3>{menu.name}</h3> 
                    <p>{menu.description}</p>
                    <section className="priceSection">
                        <label>Price :</label> 
                        <p>${menu.price.toFixed(2)}</p>
                    </section>
                </section>                                
            </section>
        </section>
    )
}
export default Menuitem;