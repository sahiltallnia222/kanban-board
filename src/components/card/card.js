import './card.css';
import { HiOutlineDotsHorizontal } from "react-icons/hi";
export default function Card({item}) {
    // let item={id:item.id,title:item.title,tag:item.tag,userId:item.userId,status:item.status,priority:item.priority}
    // console.log(item);
    return <div className='card-outer'>
        <div className="left">
            <p className='card-id'>{item.id}</p>
            <p className='title'>{item.title}</p>
            <div className='left-bottom-box'>
                <span><HiOutlineDotsHorizontal /></span>
                <span>
                    <div className="small-dot"></div>
                    {
                        item.tag.map((item,index)=>{
                            return <p key={index} className='tag'>{item}</p>
                        })
                    }
                </span>
            </div>
        </div>
        <div className="right">
            <div className='dot'></div>
        </div>
    </div>
};
