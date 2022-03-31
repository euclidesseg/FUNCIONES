//var nom = prompt("ingrese su nombre");
function decirNombre(nombre){
    nombre || (nombre =  "User");
    alert("mi nombre es  "+nombre);
        if(typeof nombre === "string"){
            alert("su nombre es "+ nombre)
        }else{
            alert("el nombre no es valido");
        }
}
decirNombre(56);