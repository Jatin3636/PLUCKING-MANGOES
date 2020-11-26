class Tree {
    constructor(x,y) {
      var options = {
        'isStatic':true,
      }
      this.body = Bodies.rectangle(x, y,0,0,options);
      World.add(world, this.body);
      this.image = loadImage("tree.png");
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(2);
      stroke("black");
      fill("orange");
      image(this.image, 0, 0,300,400);
      pop();
    }
  }