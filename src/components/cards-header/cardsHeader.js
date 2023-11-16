import './cardsHeader.css';
import { FaRegDotCircle } from "react-icons/fa";
import { MdAdd } from "react-icons/md";
import { HiDotsHorizontal } from "react-icons/hi";
import { RxHalf2 } from "react-icons/rx";
export default function CardsHeader() {
    return <div>
        <div className="box-header">
            <div className="left-header">
                <RxHalf2 color='#ffe200' size={'1.2em'}/>
                <div><p>Progess</p></div>
                <div><p>5</p></div>
            </div>
            <div className="right-header">
                <span><MdAdd size={'1.4rem'}/> </span>
                <span><HiDotsHorizontal size={'1.4rem'}/></span>
            </div>
        </div>
    </div>
};
