var r = parseInt(prompt("ingrese el radio del circulo"));
var perimetro;
var area;
function circulo(radio){
    perimetro = (2*3.1416)*radio;

    area = 3.1416 * radio * radio;
    alert("el perimetro del circulo es " + perimetro + "\n"
        + "el area del circulo es " +  area);
}
circulo(r);