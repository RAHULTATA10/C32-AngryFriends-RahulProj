class Boy1 extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/boy1.png");
    this.Visiblity = 255;
  }

  score(){
     if (this.Visiblity < 0 && this.Visiblity > -1205){
        score++;
     }
  }
};