const applyChanges =()=>{
    recoveryTime = parseInt(document.getElementById("infection-period").value);
    transmissionRate = parseFloat(document.getElementById("transmission-rate").value);    
    touchProbability = 0.5-(parseInt(document.getElementById("touch-probability").value)/100);
    hygine = 0.2- (parseInt(document.getElementById("hygine").value)/100);
    totalPopulation = parseInt(document.getElementById("population").value);
    probOfGoingOutOfHouse  = parseInt(document.getElementById("going-out-probability").value)/100;
    initialInfected  = parseInt(document.getElementById("intial-infected").value)/100;
    init()
}
const changeMap=(event)=>{
    currentMap = event.target.value    
    init()
}