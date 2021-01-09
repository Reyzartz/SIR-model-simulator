let sketch = function(g) {
    g.setup = function(){
      g.createCanvas(366, innerHeight*0.433);
      g.background(0);
    }
    g.draw = ()=>{
        g.background(black)
        g.fill(182,255,92,80);
        g.stroke(green);
        displayGraph(g,susceptibleData);
        g.fill(214,20,51,130);
        g.stroke(red)
        displayGraph(g,infectedData);
    }
  };
  new p5(sketch, 'canvas-graph');

  const displayGraph=(g,data)=>{
    g.textSize(12)
    let i;
    let  k= ceil(data.length/10)
    g.strokeWeight(2)
    g.beginShape();
    for(i=0;i<data.length;i++){
      x = map(i,0,data.length-1,15,g.width-15)
      g.vertex(x,map(data[i],0,totalPopulation,g.height-15,15))
      if(i%k==0){
        g.push()
        g.fill(200)
        g.noStroke();
        g.text(int(i/2),x-3,g.height-2);
        g.stroke(200);
        g.line(x,g.height-10,x,g.height-20)
        g.pop()
      }
      
    }
    g.vertex(map(i-1,0,data.length-1,0,g.width-15),g.height-15);
    g.endShape()

    g.push()
    for(let i=0;i<=10;i++){
        g.fill(200)
        let y =map(i,0,10,g.height-15,15)
        g.noStroke()
        g.text(int(totalPopulation*i/10),2,y+2);
        g.stroke(200)
        g.line(25,y,30,y)
    }
    g.line(25,g.height,25,0)
    g.line(0,g.height-15,g.width,g.height-15)
    g.pop()
  }