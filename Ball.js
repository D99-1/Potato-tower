class Ball {
    constructor(x, y, width, height) {
      var options = {
          frictionAir:0.005,
          density:1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("polyg.png")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      imageMode(CENTER);
      fill("grey");
      image(this.image,0, 0, this.width, this.height);
      pop();
    }
  };
  