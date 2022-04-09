// var nom = prompt("ingrese su nombre");
// function decirNombre(nombre){
//     nombre || (nombre =  "User");
//     alert("mi nombre es  "+nombre);
//         if(typeof nombre === "string"){
//             alert("su nombre es "+ nombre)
//         }else{
//             alert("el nombre no es valido");
//         }
// }
// decirNombre(56);


var n1 = prompt("ingrse el primer numero");
var n2 = prompt("ingrse el segundo numero ");
var resultado

function calcularNumeros(num1,num2){
    resultado = parseInt(num1 ) + parseInt(num2);
    return resultado
    //alert(resultado) 
    
}
var resulttado = calcularNumeros(n1,n2)
function mostrarCalculo(){
    alert(resultado)
}
mostrarCalculo()

//objectos

/*var objeto = {
    nombre: "euclides",
    apellido: "perez",
    edad: 25,
    direccion:{
        barrrio: "porvenir",
        calle:55,
    },
    hola: function hola (){alert("hola")},
}
console.log( objeto.nombre +""+ objeto.apellido +""+ objeto.edad);*/