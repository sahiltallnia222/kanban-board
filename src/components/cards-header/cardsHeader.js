import './cardsHeader.css';
import { FaRegDotCircle } from "react-icons/fa";
import { MdAdd } from "react-icons/md";
import { HiDotsHorizontal } from "react-icons/hi";
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


export default function CardsHeader({title,count}) {

    let headersVals=['In Progress','Done','Todo','Canceled','Backlog','No Priority','Low','High','Medium','Urgent'];
    let x='';

    let headerIcons={
        'Backlog':<BsStack />,
        'In Progress': <RxHalf2 color='#ffe200' size={'1em'}/>,
        'Done':<IoMdCheckmarkCircle color='#727CD7' size={'1em'}/>,
        'Todo':<FaRegCircle color='#c7c7c7ff' size={'1em'}/>,
        'Canceled':<MdCancel color='red' size={'1em'}/>,
        'No Priority':<HiOutlineDotsHorizontal size={'1em'}/>,
        'Low':<BsExclamationSquareFill color='orange' size={'1em'}/>,
        'Medium':<MdSignalCellularAlt2Bar size={'1em'} />,
        'High':<FiBarChart size={'1em'} />,
        'Urgent':<GiNetworkBars size={'1em'} />,
    }

    if(headersVals.includes(title)){
        x=headerIcons[title];
    }else if(title) {
        let arr=title.split(" ");
        x=arr[0][0];
        if(arr.length>1){
            x+=' '+arr[1][0];
        }
    }


    return <div>
        <div className="box-header">
            <div className="left-header">
                {x}
                <div><p>{title}</p></div>
                <div><p>{count}</p></div>
            </div>
            <div className="right-header">
                <span><MdAdd size={'1.4rem'}/> </span>
                <span><HiDotsHorizontal size={'1.4rem'}/></span>
            </div>
        </div>
    </div>
};
