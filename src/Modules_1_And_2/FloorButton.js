const FloorButton=(props)=>{
    const {myFloor, isGood} = props;
    return(
        <div className={`${isGood? 'floor-btn-container': 'floor-btn-container-bad'} ${myFloor+1===1? 'ground-btn-container': ''}`}>
            <label className={`${isGood? 'floor-label': 'floor-label-bad'}`}>{myFloor+1 == 1? 'G' : myFloor+1}</label>
            <button className={`${isGood? 'floor-btn': 'floor-btn-bad'} ${myFloor+1===1? 'ground-btn': ''}`}></button>
        </div>
    )
}
export default FloorButton;