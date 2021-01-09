let gridMap;
let publicPlacesLoc;
let homesLoc ;
let currentMap = 0;


const setMap = () =>{
    publicPlacesLoc = Maps[currentMap].publicPlacesLoc;
    homesLoc = Maps[currentMap].homesLoc
    rows = Maps[currentMap].rows
    cols = Maps[currentMap].cols
}
// dividing the map into homes and public places

const initMap=()=>{
    gridMap = new Array(cols);
    let a =0;
    for(let i=0;i<cols;i++){
        gridMap[i] = new Array(rows).fill(0);
    }
    
    for(let k=0;k<publicPlacesLoc.length;k++){
        let i = int(publicPlacesLoc[k]/rows)
        let j = int(publicPlacesLoc[k]%rows)

        gridMap[i][j]=areas[a];
        areas[a].setArea("publicPlace",20,[],ceil(random(scl,scl*2)));
        a++;
    }
    let p = 0
    for(let k=0;k<homesLoc.length && p<totalPopulation;k++){
        let i = int(homesLoc[k]/rows)
        let j = int(homesLoc[k]%rows)
        
        gridMap[i][j]=areas[a];
        areas[a].setArea("home",min(peoplePerHouese,p+peoplePerHouese),population.slice(p,p+min(peoplePerHouese,p+peoplePerHouese)),ceil(random(scl*0.5,scl*0.5)));
        p+=peoplePerHouese;
        a++;
    }    
    setHome();
}

// assign a home to each of the citizen
const setHome=()=>{
    for(let k=0;k<homesLoc.length;k++){
        let i = int(homesLoc[k]/rows)
        let j = int(homesLoc[k]%rows)
        for(let l = 0;l<gridMap[i][j].totalPeopleIn;l++ ){
            gridMap[i][j].peopleIn[l].home.x=j;
            gridMap[i][j].peopleIn[l].home.y=i;
            gridMap[i][j].peopleIn[l].isCitizen=true;
            gridMap[i][j].peopleIn[l].setLocation({y:i,x:j},"curr");
            gridMap[i][j].peopleIn[l].setLocation({y:i,x:j},"goal");
        }        
    }
}
                