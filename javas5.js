var nom = prompt("ingrese su nombre");
function decirNombre(nombre){

        if(typeof nombre !=== "string"){
            alert("el nombre no es valido por favor ingrese el correcto");
        }else{
            alert("su nombre es " + nombre);
        }
}
decirNombre(nom);