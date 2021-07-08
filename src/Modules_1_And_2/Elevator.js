import UtilityPanel from "./UtilityPanel"
import FloorScreen from "./FloorScreen";
import FloorButton from "./FloorButton";
import { useEffect, useState } from "react";
import './Elevator.css';
import './Bad.css';

const Elevator=()=>{
    const[floors,setFloors] = useState([]) 
    const floorCount = 14; // Default amount of floors will be 14

    const[isGood,setIsGood] = useState(true)


    useEffect(()=>{
        for (let i = 0; i < floorCount; i++) {
            if(i+1 !== 13 && floors.length< 13)setFloors(prev=>[...prev, i])
        }
    },[])

    console.log(floors)
    return(
        <div className='screen'>
            <section className='panel'>
                <FloorScreen isGood={isGood} />
                <section className={`${isGood? 'btn-panel' : 'btn-panel-bad'}`}>
                    {floors && floors.map(floor=>{
                        return <FloorButton key={`floor-${floor}`} isGood={isGood} myFloor={floor} />
                    })}
                </section>
                <UtilityPanel isGood={isGood} />
            </section>
        </div>
    )
}
export default Elevator;