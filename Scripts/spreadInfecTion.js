let susceptible,infected,recovered;
let susceptibleData=[0],infectedData=[0],recoveredData=[0];
let touchProbability=0.5,hygine=0.2;
let recoveryTime = 6,rNought=0,transmissionRate = 2;

spreadInfection = () => {
    let t = 0;
    
    for(let i=0;i<totalAreas;i++){
        let recVal=0;
       // areas[i].isInfected = false
        for(let p = 0;p<areas[i].totalPeopleIn;p++){
            if(!areas[i].peopleIn[p].isRecovered && areas[i].peopleIn[p].reprouctionRate<=0){
                areas[i].peopleIn[p].isRecovered=true;
            }
            if(!areas[i].peopleIn[p].isRecovered && areas[i].peopleIn[p].infectionDate+recoveryTime<time && areas[i].peopleIn[p].isInfected){
                areas[i].peopleIn[p].isRecovered=true;
            }
            if(areas[i].peopleIn[p].isInfected && !areas[i].peopleIn[p].isRecovered){
                j=0;
                while(j<areas[i].totalPeopleIn && areas[i].peopleIn[p].reprouctionRate>random()){
                    if(!areas[i].peopleIn[j].isInfected && random()<touchProbability && random()<hygine){
                        areas[i].peopleIn[j].isInfected=true;
                        areas[i].peopleIn[j].infectionDate = time;
                        areas[i].peopleIn[p].reprouctionRate-=1;
                    }
                    j++;
                }
            }
            if(areas[i].peopleIn[p].isInfected){
                areas[i].isInfected =true
            }
        }
        if(recVal === areas[i].totalPeopleIn){
            areas[i].isRecovered = true
        }
    }
}
updateNumberOfPeopleAffected=()=>{
    susceptible=0;
    infected=0;
    recovered=0;
    population.forEach( p=>{
        if(p.isInfected && !p.isRecovered)
            infected++;
        else if(p.isRecovered)
            recovered++;
        else
            susceptible++;
    })
    rNought = (infected/infectedData[infectedData.length-3]).toFixed(2);
    susceptibleData.push(totalPopulation-susceptible);
    infectedData.push(infected);
    recoveredData.push(recovered);
}