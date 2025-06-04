import { setDisplaySidebar } from '../../features/menu';
import './topnav.css';
import { useDispatch } from 'react-redux';
import { MdMenu } from "react-icons/md";

const Topnav = () => {
    const dispatch = useDispatch();
    return (
        <main className="topNav">
            <section>
                <button onClick={()=>dispatch(setDisplaySidebar())}><MdMenu size={'1.5em'}/></button>
            </section>
        </main>
    )
}
export default Topnav;