class MonCanvas {
    constructor(argL, argH) {
        this.l = argL;
        this.h = argH;
        this.creeBalise();
    }
    creeBalise() {
        let c = document.createElement('canvas');
        c.width = this.l;
        c.height = this.h;
        this.ctx = c.getContext("2d");
        document.body.appendChild(c);
    }
    renduCanvas(obj) {
        obj.img.onload = () => {
            this.ctx.drawImage(obj.img, obj.x, obj.y, obj.h, obj.l);
        }
    }
}