// Placer le quadrillage en fond:

var c1=document.getElementById("demo");
var pinceau=c1.getContext("2d");

var ecart = 10; //largeur d'un côté des cases
//lignes
for(var h = ecart ; h < c1.height ; h += ecart) {
   pinceau.moveTo(0, h); //déplacer le pinceau à (x,y) sans tracer
   pinceau.lineTo(c1.width, h); //tracer jusqu'à (x,y)
   pinceau.lineWidth = 0.2;
}
//colonnes
for(var w = ecart ; w < c1.width ; w += ecart) {
   pinceau.moveTo(w, 0);
   pinceau.lineTo(w, c1.height);
   pinceau.lineWidth = 0.2;
}
pinceau.stroke();
