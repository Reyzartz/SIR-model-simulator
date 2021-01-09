class Jojo{
    publicLoc=null;
    isInPublic = false;
    id=null;
    home=null;
    isCitizen=false;
    isInfected = false;
    isRecovered = false;
    infectionDate = 0;
    reprouctionRate=0;
    peopleInfected=0;
    currentLocation = createVector(0,0);
    goalLocation = createVector(0,0);
    velocity = createVector(0,0);
    xSpeed = 0;
    maxVelocity = floor(random(5,7));
    randomOffx = random(7,scl-7)
    randomOffy = random(7,scl-7)
    reached = false;
    
    constructor(x,y,id,infected,reprouctionRate){
        this.home = {x,y}
        this.id = id;
        this.isInfected = infected;
        this.reprouctionRate =reprouctionRate
    }

    // Function to a assign a public location to this citizen and move it to the location
    toPublic=(loc)=>{
        this.isInPublic = true
        this.publicLoc = loc
    }

    updateMovement=()=>{
        
        if(dist(this.currentLocation.x,this.currentLocation.y,this.goalLocation.x,this.goalLocation.y) <=this.maxVelocity && !this.reached ){
            if(!this.reached){
                this.currentLocation.x =this.goalLocation.x+this.randomOffx
                this.currentLocation.y =this.goalLocation.y +this.randomOffy
                this.reached = true;
            }
            
            return
        }
        else if(this.currentLocation.x<this.goalLocation.x && this.velocity.x>=0){
            this.velocity.x+=1;
            this.velocity.y=0;
        }
        else if(this.currentLocation.y>this.goalLocation.y && this.velocity.y<=0){
            this.velocity.y-=1;
            this.velocity.x=0;
        }
        else if(this.currentLocation.x>this.goalLocation.x && this.velocity.x<=0){
            this.velocity.x-=1;
            this.velocity.y=0;
        }
        else if(this.currentLocation.y<this.goalLocation.y && this.velocity.y>=0){
            this.velocity.y+=1;
            this.velocity.x=0;
        }
        
       if(!this.reached){
        this.velocity.limit(this.maxVelocity)
        this.currentLocation.add(this.velocity)
       }
        
        
    }

    setLocation = (loc,type) =>{
        let x;
        x = loc.x*scl;
        // x += int(loc.x/3)*20
        let y;
        y = loc.y*scl;
        
        if(type==="curr")
            this.currentLocation.set(x,y)
        else if(type==="goal")
            this.goalLocation.set(x,y)
        this.velocity.mult(0)
        this.reached =false
    }

    show=()=>{
        push();
            noStroke()
            if(this.isInfected && !this.isRecovered){
              fill(red);
            }
            else if(this.isRecovered) {
              fill(blue);
            }
            else{
              fill(green);
            }
            strokeWeight(6);
            translate(xoff+this.currentLocation.x - scl/2,yoff+this.currentLocation.y - scl/2,scl/10);
            rotateX(90)
            box(scl/15,scl/5,scl/15)
            
        pop();
    }
}