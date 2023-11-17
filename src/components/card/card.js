import './card.css';
import { RxHalf2 } from "react-icons/rx";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { FaRegCircle } from "react-icons/fa6";
import { MdCancel } from "react-icons/md";
import { BsStack } from "react-icons/bs";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { BsExclamationSquareFill } from "react-icons/bs";
import { MdSignalCellularAlt2Bar } from "react-icons/md"
import { FiBarChart } from "react-icons/fi";
import { GiNetworkBars } from "react-icons/gi";


export default function Card({item,user,group}) {
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    let x="";
    let priorityIcon="";
    let statusIcon="";

    let priority_obj={
        0:'No priority',
        1:'Low',
        2:'Medium',
        3:'High',
        4:'Urgent'
    }

    let headerIcons={
        'Backlog':<BsStack />,
        'In progress': <RxHalf2 color='#ffe200' size={'0.8em'}/>,
        'Done':<IoMdCheckmarkCircle color='#727CD7' size={'0.8em'}/>,
        'Todo':<FaRegCircle color='#c7c7c7ff' size={'0.8em'}/>,
        'Canceled':<MdCancel color='red' size={'0.8em'}/>,
        'No priority':<HiOutlineDotsHorizontal size={'0.8em'}/>,
        'Low':<BsExclamationSquareFill color='orange' size={'0.8em'}/>,
        'Medium':<MdSignalCellularAlt2Bar size={'0.8em'} />,
        'High':<FiBarChart size={'0.8em'} />,
        'Urgent':<GiNetworkBars size={'0.8em'} />,
    }
    function getImgText(str){

        priorityIcon=headerIcons[priority_obj[item.priority]]
        statusIcon=headerIcons[item.status]
        let arr=str.split(" ");
        x=arr[0][0];
        if(arr.length>1){
            x+=''+arr[1][0].toUpperCase();
        }
    }


    getImgText(user.name)
    function getOnlineColor(){
        if(user.available){
            return '#1eff00'
        }else return 'gray'
    }

    return <div className='card-outer'>
        <div className="left">
            <p className='card-id'>{item.id}</p>
            <p className='title'>{group!='status'?statusIcon:""} {item.title}</p>
            <div className='left-bottom-box'>
                {
                    group!='priority' && 
                    <span>{priorityIcon}</span>
                }

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
            {group!='users'&&<div className="img-box" style={{backgroundColor:getRandomColor(),position:'relative'}}>{x}
            <div className='online-box' style={{backgroundColor:getOnlineColor()}}></div>
            </div>}

        </div>
    </div>
};
