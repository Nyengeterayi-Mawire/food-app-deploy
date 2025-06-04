import { IoClose } from "react-icons/io5";
import './closeWidget.css'
import { useDispatch } from "react-redux";

const Closewidget = ({displayFunction}) => {
    const dispatch = useDispatch();
    return (
        <button className='exitButton' onClick={()=>dispatch(displayFunction())}>
            <IoClose size={'1.5em'}/>
        </button>
    )
}
export default Closewidget;