const UtilityPanel=(props)=>{
    const {isGood} = props;
    return (
        <div className={`${isGood? 'ute-panel': 'ute-panel-bad'}`}>
            Utility Panel
        </div>
    )
}
export default UtilityPanel;