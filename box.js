class Box {
    constructor(){
      // var options={
       //    restitution:1.0
     //  }
        this.body=Bodies.rectangle(200,200,50,50)
        World.add(world,this.body)
    }
display(){
var pos=this.body.position
rectMode(CENTER)
fill("brown")
rect(pos.x,pos.y,this.width,this.height)
}
}