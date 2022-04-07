var nom = prompt("ingrese su nombre");
function decirNombre(nombre){

   
        if(typeof nombre === "string"){
            alert("su nombre es "+ nombre)
        }else if(typeof nombre != "string"){
            alert("el nombre no es valido por favor ingrese uno valido");
        }
}
decirNombre(nom);