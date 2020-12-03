class Box extends Baseclass {
    constructor(x, y, width, height){
      super(x,y,width,height);
      this.image = loadImage("sprites/wood1.png");
    }
  
  };
  
  function display(){

    if(this.body.speed<3){
      super.display();
      }else{
        World.remove(world,this.body);
        push();
        this.Visiblity = this.Visiblity-5;
        tint(255,this.Visiblity);
        image(this.image,this.body.postiton.x,this.body.postiton.y,50,50);
        pop();
      }

  

} 
  