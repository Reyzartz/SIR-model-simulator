const setData=()=>{
    setInfectedPeople()
}
const setInfectedPeople = () =>{
    document.getElementById("susceptible").innerText = susceptible
    document.getElementById("infected").innerText = infected
    document.getElementById("recovered").innerText = recovered
}
let advanceFilterOpened =false
const openAdvanceFilters=()=>{
    console.log("dj");
    
    if(!advanceFilterOpened){
        document.getElementById("advance-filters").style.transform = "scaleY(1)"
    }
    else{
        document.getElementById("advance-filters").style.transform = "scaleY(0)"
    }
    advanceFilterOpened =!advanceFilterOpened
}
