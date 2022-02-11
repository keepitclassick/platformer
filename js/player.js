function Player(x, y) {
  this.x = x;
  this.y = y;
  this.xspeed = 0;
  this.yspeed = 0;
  this.friction = 0.6;
  this.maxspeed = 10;
  this.width = 50;
  this.height = 100;
  this.active = true;

  this.step = function () {
    //movement
    if (this.active) {
      //horizontal movement
      if ((!leftKey && !rightKey) || (leftKey && rightKey)) {
        //slow down
        this.xspeed *= this.friction;
      } else if (rightKey) {
        //move right
        this.xspeed++;
      } else if (leftKey) {
        //move left
        this.xspeed--;
      }
      //vertical movement
      if (upKey) {
        this.yspeed -= 15;
      }
      //gravity
      this.yspeed += 5;
      //correct speed
      if (this.xspeed > this.maxspeed) {
        this.xspeed = this.maxspeed;
      } else if (this.xspeed < -this.maxspeed) {
        this.xspeed = -this.maxspeed;
      }

      if (this.yspeed > this.maxspeed) {
        this.yspeed = this.maxspeed;
      } else if (this.yspeed < -this.maxspeed) {
        this.yspeed = -this.maxspeed;
      }

      this.x += this.xspeed;
      this.y += this.yspeed;
    }
  };

  this.draw = function () {
    ctx.fillStyle = "purple";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  };
}
