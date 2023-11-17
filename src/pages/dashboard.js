import { useEffect, useState } from 'react';
import Card from '../components/card/card';
import CardsHeader from '../components/cards-header/cardsHeader';
import './dashboard.css';
import axios from 'axios';

export default function Dashboard({displayVals}) {
    let grouping=displayVals.grouping;
    let ordering=displayVals.ordering;
    console.log(grouping,ordering);
    let priority_obj={
        0:'No priority',
        1:'Low',
        2:'Medium',
        3:'High',
        4:'Urgent'
    }
    const [data,setData]=useState(null)

    const getData=async()=>{
        const res=await axios.get('https://api.quicksell.co/v1/internal/frontend-assignment');
        let resData={};
        resData=res.data;
        if(grouping==='status'){
            let statusData={};
            let tickets=resData.tickets;
            for(let i=0;i<tickets.length;i++){
                let st=tickets[i]['status'];
                if(statusData[st]===undefined){
                    statusData[st]=[];
                    statusData[st].push(tickets[i]);
                }else{
                    statusData[st].push(tickets[i]);
                }
            }

            let keys=Object.keys(statusData)
            for(let i=0;i<keys.length;i++){
                let key=keys[i];
                let arr=statusData[key];
                if(ordering==='title'){
                    arr.sort((a,b)=>a.title.localeCompare(b.title))
                }
                else arr.sort(function(a,b){return b.priority-a.priority})
                statusData[key]=arr;
            }
            setData(statusData);
        }else if(grouping==='priority'){
            let priorityData={};
            let tickets=resData.tickets;
            for(let i=0;i<tickets.length;i++){
                let pt=priority_obj[tickets[i]['priority']];
                if(priorityData[pt]===undefined){
                    priorityData[pt]=[];
                    priorityData[pt].push(tickets[i]);
                }else{
                    priorityData[pt].push(tickets[i]);
                }
            }

            let keys=Object.keys(priorityData)
            for(let i=0;i<keys.length;i++){
                let key=keys[i];
                let arr=priorityData[key];
                if(ordering==='title'){
                    arr.sort((a,b)=>a.title.localeCompare(b.title))
                }
                else arr.sort(function(a,b){return b.priority-a.priority})
                priorityData[key]=arr;
            }
            console.log(priorityData);
            setData(priorityData);
        }
    }

    useEffect(()=>{
        getData();
    },[grouping,ordering])

    if(data==null){
        return <div>
            Something went wrong...
        </div>
    }

    if(grouping=="status"){
        return <div>
                <div className='status-outer'>
                    <div className='status-inner'>
                    <CardsHeader title={'Backlog'} count={data['Backlog']?data['Backlog'].length:0}/>
                        {data['Backlog'] && <div>
                            {
                                data['Backlog'].map((item,index) =>{
                                    return <Card key={index} item={item}/>
                                })
                            }
                        </div>
                        }
                    </div>
                    <div className='status-inner'>
                    <CardsHeader title={'Todo'} count={data['Todo']?data['Todo'].length:0}/>
                        {data['Todo'] && <div>
                            {
                                data['Todo'].map((item,index) =>{
                                    return <Card key={index} item={item}/>
                                })
                            }
                        </div>
                        }
                    </div>
                    <div className='status-inner'>
                        <CardsHeader title={'In Progress'} count={data['In progress']?data['In progress'].length:0}/>
                        {data['In progress'] && <div>
                                {
                                    data['In progress'].map((item,index) =>{
                                        return <Card key={index} item={item}/>
                                    })
                                }
                            </div>
                        }
                    </div>
                    <div className='status-inner'>
                    <CardsHeader title={'Done'} count={data['Done']?data['Done'].length:0}/>
                        {data['Done'] && <div>
                                {
                                    data['Done'].map((item,index) =>{
                                        return <Card key={index} item={item}/>
                                    })
                                }
                            </div>
                        }
                    </div>
                    <div className='status-inner'>
                    <CardsHeader title={'Canceled'} count={data['Canceled']?data['Canceled'].length:0}/>
                        {data['Canceled'] && <div>
                                {
                                    data['Canceled'].map((item,index) =>{
                                        return <Card key={index} item={item}/>
                                    })
                                }
                            </div>
                        }
                    </div>
                </div>
        </div>



    }else if(grouping==="user"){
        return <div>
            
        </div>



    }
    else if(grouping==="priority"){
        return <div>
                <div className='status-outer'>
                    <div className='status-inner'>
                    <CardsHeader title={'No Priority'} count={data['No priority']?data['No priority'].length:0}/>
                        {data['No priority'] && <div>
                            {
                                data['No priority'].map((item,index) =>{
                                    return <Card key={index} item={item}/>
                                })
                            }
                        </div>
                        }
                    </div>
                    <div className='status-inner'>
                    <CardsHeader title={'Low'} count={data['Low']?data['Low'].length:0}/>
                        {data['Low'] && <div>
                            {
                                data['Low'].map((item,index) =>{
                                    return <Card key={index} item={item}/>
                                })
                            }
                        </div>
                        }
                    </div>
                    <div className='status-inner'>
                        <CardsHeader title={'Medium'} count={data['Medium']?data['Medium'].length:0}/>
                        {data['Medium'] && <div>
                                {
                                    data['Medium'].map((item,index) =>{
                                        return <Card key={index} item={item}/>
                                    })
                                }
                            </div>
                        }
                    </div>
                    <div className='status-inner'>
                    <CardsHeader title={'High'} count={data['High']?data['High'].length:0}/>
                        {data['High'] && <div>
                                {
                                    data['High'].map((item,index) =>{
                                        return <Card key={index} item={item}/>
                                    })
                                }
                            </div>
                        }
                    </div>
                    <div className='status-inner'>
                    <CardsHeader title={'Urgent'} count={data['Urgent']?data['Urgent'].length:0}/>
                        {data['Urgent'] && <div>
                                {
                                    data['Urgent'].map((item,index) =>{
                                        return <Card key={index} item={item}/>
                                    })
                                }
                            </div>
                        }
                    </div>
                </div>
        </div>
    }else{
        return <div><p>Something went wrong...</p></div>
    }
};
