import { useDispatch, useSelector } from 'react-redux';
import './menuItemWidget.css'
import { useEffect, useState } from 'react';
import Closewidget from '../closeWidget/closeWidget';
import { addToBasket, setDisplayMenuItem } from '../../features/menu';
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { setFavorite } from '../../features/user';
import { useNavigate } from 'react-router-dom';

const Menuitemwidget = () => {
    const display = useSelector(state=>state.menu.displayMenuItem);
    const menuItem = useSelector(state=>state.menu.menuItem);
    const url = useSelector(state=>state.user.url);
    const user = useSelector(state=>state.user.user);
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [price,setPrice] = useState(menuItem.price);
    const [quantity,setQuantity] = useState(1);
    const [saved,setSaved] = useState(false)

    useEffect(()=>{
        setPrice(menuItem.price);
        setQuantity(1);
    },[menuItem]);  

    useEffect(()=>{ 
        if(Object.keys(user).length!==0){
            const validSave = user.favorites.filter(menuId=>menuId === menuItem._id);
            if(validSave.length!==0){
                setSaved(true);
            }else{
                setSaved(false);
            }
        }
    },[user.favorites,menuItem]) 

    const handleSave = (e) => {
        e.preventDefault(); 
        if(user.email){
            dispatch(setFavorite(menuItem._id));
        }else{
            navigate('/login')
        }
    }

    const handleSaved = (e) => {
        e.preventDefault(); 
        if(user.email){
            dispatch(setFavorite(menuItem._id));
        }else{
            navigate('/login')
        }
    }

    const handleAddQuantity = (e) => {
        e.preventDefault();
        setQuantity(state=>state+=1);
    }
    const handleSubtractQuantity = (e) => {
        e.preventDefault();
        setQuantity(state=>state-=1)
    }

    const handleAddToBasket = (e) => {
        e.preventDefault();
        dispatch(addToBasket({menuItem,quantity})); 
        dispatch(setDisplayMenuItem());
        setQuantity(1);
    }

    return (
        <main className={`menuItemWidget ${display ? 'show' : 'hide'}`}> 
            <section className='formSection'>
                <form onSubmit={handleAddToBasket}>
                    <img className='menuItemFormImage' src={`${url}/${menuItem.image}`}/> 
                    <h2 className='menuItemFormName' >{menuItem.name}</h2>
                    <p className='menuItemFormDescription' >{menuItem.description}</p> 
                    <section className='quantitySection'>
                        <label>Quantity : </label> 
                        <section className='quantityAddRemoveSection'>
                            <button className='quantitySubtractButton' onClick={handleSubtractQuantity}>
                                <FaMinus />
                            </button>
                            <input value={quantity} type='number' onChange={(e)=>setQuantity(parseFloat(e.target.value))}/>
                            <button className='quantityAddButton' onClick={handleAddQuantity}>
                                <FaPlus />
                            </button>
                        </section>
                    </section>
                    <section className='sumitSection' >
                        {saved?<>
                            <button className='addToBasketButton' type='button' style={{backgroundColor:'lightgreen',marginRight:'10px'}} onClick={handleSaved}>Saved</button></> : <>
                            <button className='addToBasketButton' type='button' style={{backgroundColor:'lightgreen',marginRight:'10px'}} onClick={handleSave}>Save</button>
                        </>}
                        <button type='submit' className='addToBasketButton'>${(price * quantity).toFixed(2)} Add to basket</button>
                    </section>
                </form> 
                <Closewidget displayFunction={setDisplayMenuItem}/>
            </section>            
        </main>
    )
}
export default Menuitemwidget;