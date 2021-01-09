let probToSecondPublicPlace=0.5;
let probOfGoingOutOfHouse = 0.8;
//Function to move the people in their homes to a random public place if there is space available

const moveToPublicPlaces=()=>{ 
    let p=0;
    shuffle(population,true);
    let k=0;
    for(let p=0;p<totalPopulation;p++){
        
        if(!population[p].isInPublic && population[p].isCitizen && random()<probOfGoingOutOfHouse){
            k = floor(random(publicPlacesLoc.length))
            let loc = population[p].home;
            population[p].setLocation({...loc},"curr")
            gridMap[loc.y][loc.x].removePeople(population[p].id)

            loc = {x:int(publicPlacesLoc[k]%rows),y:int(publicPlacesLoc[k]/rows)};
            gridMap[loc.y][loc.x].addPeople(population[p])
            population[p].toPublic({...loc});
            population[p].setLocation({...loc},"goal")
        }
        else if(population[p].isInPublic && population[p].isCitizen && random()<probToSecondPublicPlace){
            k = floor(random(publicPlacesLoc.length))
            let loc = population[p].publicLoc; 
            population[p].setLocation({...loc},"curr")
            gridMap[loc.y][loc.x].removePeople(population[p].id)

            loc = {x:int(publicPlacesLoc[k]%rows),y:int(publicPlacesLoc[k]/rows)};
            gridMap[loc.y][loc.x].addPeople(population[p])
            population[p].toPublic({...loc});
            population[p].setLocation({...loc},"goal")
        }
    }    
}

//Function to move pepople back to thier respective homes if they are in a public place

const moveToHome = () =>{
    for(let p=0;p<totalPopulation;p++){
        
        if(population[p].isInPublic && population[p].isCitizen){
            let loc = population[p].publicLoc;
            population[p].setLocation({...loc},"curr")
            gridMap[loc.y][loc.x].removePeople(population[p].id)
            
            loc = population[p].home;
            gridMap[loc.y][loc.x].addPeople(population[p])
            population[p].isInPublic=false;
            population[p].setLocation({...loc},"goal")
        }
    }
}