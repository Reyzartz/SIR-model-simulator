let initialInfected = 0.01;
const init = () =>{
    setMap();

    xoff = -(scl*rows)/2 + scl/2
    yoff = -(scl*cols)/2

    time = 0;
    population=[];
    peoplePerHouese = floor(totalPopulation/homesLoc.length);
    totalAreas = rows * cols;
    currentLocation = 0;
    areas =[];
    gridMap = []

    susceptible=totalPopulation - 2;
    infected=2;
    recovered=0;
    susceptibleData=[0];
    infectedData=[0];
    recoveredData=[0];

    initPopulation();
    initAreas();
    initMap();
}

// initializing the population and given them an id

const initPopulation = () =>{
    population = new Array(totalPopulation);
    for(let i=0;i<totalPopulation;i++){
        population[i]=new Jojo(null,null,i,false,transmissionRate)
    }
    for(i=0;i<int(totalPopulation*initialInfected);i++)
        population[int(random(totalPopulation))].isInfected=true;
}

const initAreas = ()=>{
    areas = new Array(totalAreas);
    for(let i=0;i<totalAreas;i++){
        areas[i] = new Area(null,null,null);
    }
    
}

