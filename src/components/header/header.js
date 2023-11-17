import './header.css'
import { RiEqualizerFill } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from 'react';
export default function Header({handleDisplay}) {

    const [group,setGroup]=useState('status');
    const [order,setOrder]=useState('title')
    const [show,setShow]=useState(false)

    const applyChanges=(a,b)=>{
        handleDisplay(a,b)
        setShow(false)
    }

    return <div className='header-outer'>
        <button className='btn' onClick={()=>{setShow(!show)}}>
            <span><RiEqualizerFill /></span>
            <span>Display</span>
            <span><IoIosArrowDown /></span>
        </button>

        {show &&<div className="dropBox">
            <div className='dropItem'>
                <p>Grouping</p>
                <select className='select-box' value={group} onChange={(e)=>{setGroup(e.target.value)}}>
                    <option value="status">Status</option>
                    <option value="user">User</option>
                    <option value="priority">Priority</option>
                </select>
            </div>
            <div className='dropItem' >
                <p>Ordering</p>
                <select className='select-box' value={order} onChange={(e)=>{setOrder(e.target.value)}}>
                    <option value="title">Title</option>
                    <option value="priority">Priority</option>
                </select>
            </div>
            <div className="dropItem">
                <p></p>
                <button className='btn' onClick={()=>{applyChanges(group,order)}}>Apply Changes</button>
            </div>
        </div>}
    </div>
};  
