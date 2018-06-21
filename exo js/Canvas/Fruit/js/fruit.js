class Fruit{
    constructor(src, x, y, h, l){
        this.x = x;
        this.y = y;
        this.h = h;
        this.l = l;
        this.nom = "fruit";

        var img = new Image();
        img.width = this.l;
        img.height = this.h;
        img.src = src;
    }
    // bougerFruit(){
    //    
    // }
}