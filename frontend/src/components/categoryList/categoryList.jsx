import burgerImage from '../../assets/burger png.png';
import pizzaImage from '../../assets/pizza png.webp';
import shakesImage from '../../assets/shakes png.webp';
import bowlImage from '../../assets/bowl png.png';
import cokeImage from '../../assets/coke png.png';
import iceCreamImage from '../../assets/icecream cup png.webp';
import {Link} from 'react-router-dom';
import './categoryList.css'

const Categorylist = ({burgersRef,pizzasRef,bowlsRef,iceCreamsRef,drinksRef}) => {
    const handleScroll = (ref) => {
        ref.current.scrollIntoView({
            behavior: "smooth", // Smooth scrolling
            block: "start", // Align to the top of the section
          });
    }
    return(
        <main className="categoryList">
            <div className='categoryFlexContainer'>
                <section className='categoryScrollSection'>
                    <button  className='categoryCardOuterSection' onClick={()=>handleScroll(burgersRef)}>
                        <div className="categoryCard">
                            <img src={burgerImage}/>                        
                        </div>
                        <p>Burgers</p>
                    </button> 
                    <button to='Pizzas' className='categoryCardOuterSection' onClick={()=>handleScroll(pizzasRef)}>
                        <div className="categoryCard">
                            <img src={pizzaImage}/>                        
                        </div>
                        <p>Pizzas</p>
                    </button> 
                    <section className='categoryCardOuterSection' onClick={()=>handleScroll(bowlsRef)}>
                        <div className="categoryCard">
                            <img src={bowlImage}/>                        
                        </div>
                        <p>Bowls</p>
                    </section> 
                    <section className='categoryCardOuterSection' onClick={()=>handleScroll(iceCreamsRef)}>
                        <div className="categoryCard">
                            <img src={iceCreamImage}/>                        
                        </div>
                        <p>Ice Creams</p>
                    </section> 
                    <section className='categoryCardOuterSection' onClick={()=>handleScroll(drinksRef)}>
                        <div className="categoryCard">
                            <img src={cokeImage}/>                        
                        </div>
                        <p>Drinks</p>
                    </section> 
                    <section className='categoryCardOuterSection'>
                        <div className="categoryCard">
                            <img src={shakesImage}/>                        
                        </div>
                        <p>Shakes</p>
                    </section> 
                </section>     
            </div>
           
            
        </main>
    )
}
export default Categorylist;