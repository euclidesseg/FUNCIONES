var celsius = parseInt(prompt("ingrese la temperatura en celsius "));
var fahrenheit = parseInt(prompt("ingrese el valor de la tempreatura en fahrenheit"));
var convertcel;
var convertfah;

function conversor(valor1, valor2){
    convertfah = (celsius * 1.8) + 32
    convertcel = (fahrenheit - 32)/1.8;
    alert("los grados fahrenheit convertidos es " +convertfah +"\n"
        + "los grados celsius convertidos es +" + convertcel);
    
        if(convertcel <= 0 && convertcel <= 4 || convertfah <= 36){
            alert("pailas nos congelamos el calor es mejor que el frio")
        }else if(convertcel >= 5 && convertcel <= 15 || convertfah >= 37 && convertfah <= 50){
            alert("esta haciendo frio")
        }else if(convertcel > 15 && convertcel <= 38 ||convertfah > 50 && convertfah <=100){
            alert("esta templado el dia")
        }else {
            alert("que cule solaso que esta haciendo erdaa")
        }

}
conversor(celsius, fahrenheit);