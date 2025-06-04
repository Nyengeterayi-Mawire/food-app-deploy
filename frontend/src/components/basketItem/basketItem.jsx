import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import './basketItem.css'
import { useDispatch } from "react-redux";
import { setBasketQuantity } from "../../features/menu";
const Basketitem = ({image,name,price,_id,quantity,index}) => { 
    const dispatch = useDispatch();

    const handleAddQuantity = () => {
        dispatch(setBasketQuantity({quantity : quantity + 1,index}))
    }

    const handleSubtractQuantity = () => {
        dispatch(setBasketQuantity({quantity : quantity - 1,index}))
    }
    return (
        <main className="basketItem"> 
            <section className="basketItemSection">
                <section className="basketItemDescription">
                    <h3 className="basketItemName">{name}</h3>
                    <p className="basketItemPrice">${price}</p> 
                </section>            
                <section className='quantityAddRemoveSection'>
                    <button className='quantitySubtractButton' onClick={handleSubtractQuantity}>
                        <FaMinus />
                    </button>
                    <input value={quantity} type='number' />                    
                    <button className='quantityAddButton' onClick={handleAddQuantity}>
                        <FaPlus />
                    </button>
                </section>
            </section>          
            
        </main>
    )
}
export default Basketitem;