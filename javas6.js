var numero1 = parseInt(prompt("ingrese el primer valor"));
var numero2 = parseInt(prompt("ingrese el segndo valor"))
var suma, resta, multiplicacion, divicion;
function operaciones(valor1, valor2){
    suma = valor1 + valor2;
    resta = valor1 - valor2;
    multiplicacion = valor1 * valor2;
    divicion = valor1 / valor2;
    alert("el valor para la suma es " + suma + "\n"
        + "el valor para la resta es " + resta + "\n"
        + "el valor para la multiplicacion es " + multiplicacion + "\n"
        + "el valor para la divicion es " + divicion + "\n")
}
operaciones(numero1, numero2)