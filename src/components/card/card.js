import './card.css';
import { HiOutlineDotsHorizontal } from "react-icons/hi";
export default function Card() {
    return <div className='card-outer'>
        <div className="left">
            <p className='card-id'>CAM-1</p>
            <p className='title'>Add Multi-Language support: Add multiple  within the...</p>
            <div className='left-bottom-box'>
                <span><HiOutlineDotsHorizontal /></span>
                <span>
                    <div className="small-dot"></div>
                    <p className='tag'>Feature Request</p>
                </span>
            </div>
        </div>
        <div className="right">
            <div className='dot'></div>
        </div>
    </div>
};
