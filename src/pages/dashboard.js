import Card from '../components/card/card';
import CardsHeader from '../components/cards-header/cardsHeader';
import './dashboard.css';


export default function Dashboard({displayVals}) {
    let grouping=displayVals.grouping;
    let ordering=displayVals.ordering;

    if(grouping=="status"){
        return <div>
                <div className='status-outer'>
                    <div className='status-inner'>
                        <CardsHeader/>
                        <div>
                            <Card/>
                            <Card/>
                            <Card/>
                        </div>
                    </div>
                    <div className='status-inner'>
                    <CardsHeader/>
                    <div>
                            <Card/>
                            <Card/>
                            <Card/>
                        </div>
                    </div>
                    <div className='status-inner'>
                        <CardsHeader/>
                        <div>
                            <Card/>
                            <Card/>
                            <Card/>
                        </div>
                    </div>
                    <div className='status-inner'>
                        <CardsHeader/>
                        <div>
                            <Card/>
                            <Card/>
                            <Card/>
                            <Card/>
                            <Card/>
                            <Card/>
                            <Card/>
                        </div>
                    </div>
                    <div className='status-inner'>
                        <CardsHeader/>
                        <div>
                            <Card/>
                            <Card/>
                            <Card/>
                            <Card/>
                            <Card/>
                        </div>
                    </div>
                </div>
        </div>



    }else if(grouping=="user"){
        return <div>
            
        </div>



    }else if(grouping=="priority"){
        return <div>
                <div className='priority-outer'>
                    <div className='priority-inner'></div>
                    <div className='priority-inner'></div>
                    <div className='priority-inner'></div>
                    <div className='priority-inner'></div>
                    <div className='priority-inner'></div>
                </div>
        </div>
    }else{
        return <div><p>Something went wrong...</p></div>
    }
};
