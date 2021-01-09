
updatePeopleMovement=()=>{
    population.forEach( p=>{
        if(p.isCitizen){
            p.updateMovement()
            p.show()
        }
        
    })
}
const displayAreas=(grid)=>{
    let size =0;
    for(let i = 0; i<cols; i++){
      // xoff=10;
      for(let j=0;j<rows;j++){
        if(grid[i][j].type == "home")
            size =12;
        else if(grid[i][j].type == "public")
            size =10
        if(grid[i][j].isInfected){
          fill(255,73,51,130)
        }
        else{
          fill(200,255,100,130)
        }
        push()
        noStroke()
        translate(xoff+j*scl,yoff+i*scl,grid[i][j].height/2);
        box(scl-size,scl-size,grid[i][j].height);
        pop()
      }
    }
  }
  const displayPlane = ()=>{
    push()
      fill(255)
      noStroke();
      translate(0,-scl/2,-2)
      plane(scl*(rows+1),scl*(cols+1))
    pop()
  }
  
  