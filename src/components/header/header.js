import './header.css'
import { RiEqualizerFill } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
export default function Header({handleDisplay}) {



    return <div className='header-outer'>
        <button className='btn' onClick={()=>{handleDisplay("wefwe","user")}}>
            <span><RiEqualizerFill /></span>
            <span>Display</span>
            <span><IoIosArrowDown /></span>
        </button>
    </div>
};  
