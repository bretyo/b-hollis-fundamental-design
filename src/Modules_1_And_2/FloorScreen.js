const FloorScreen=(props)=>{
    const {isGood} = props;
    return(
        <div className={`${isGood? 'floor-screen': 'floor-screen-bad'}`}>
            Floor screen
        </div>
    )
}
export default FloorScreen;