class Area{
    totalPeopleIn =0;
    peopleIn=[]
    height = 0;
    isInfected = false
    isRecovered = false
    constructor(typ,totalCap,peoIn){
        this.type = typ;
        this.totalCapacity = totalCap
        this.peopleIn = peoIn
    }
    // function to add people to this area 

    addPeople= (loc)=>{
        if(this.totalPeopleIn<=this.totalCapacity){
            this.totalPeopleIn+=1;
            this.peopleIn.push(loc)
        }
        
    }
    setArea = (typ,totalCap,peoIn,height)=>{
        this.type = typ;
        this.totalCapacity = totalCap
        this.peopleIn = peoIn
        this.totalPeopleIn = peoIn.length
        this.height = height
    }
    //function to remove people from this area
    
    removePeople = (id) =>{
        if(this.totalPeopleIn>=0){
            this.totalPeopleIn-=1;
            for(let i=0;i<=this.totalPeopleIn;i++){
                if(this.peopleIn[i].id === id){
                    this.peopleIn.splice(i,1);
                    break;
                }
            }
        }
    }
    getNumberOfPeopleInfected = ()=>{
        let infec= 0;
        this.peopleIn.forEach( p => {
            if(p.isInfected)
                infec++;
        });
        return infec;
    }
}