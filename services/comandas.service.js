import { comandas } from '../data/comandas.js';

function validateComanda(comanda) {
    if (!comanda || typeof comanda !== "object") return "Body inválido";
    if (!comanda.nombre || !comanda.email || !comanda.items) return "Faltan campos, debe contener: nombre, email, items ";
    
    //min 2 char nombre
    //email con formato correcto
    //items min 1 elemento
    
    //validateTodas las camisetas
        
    return null;
}

//Comprueva si una camiseta existe
//camisetasId debe existir
        //talla 
        //color debe existir
function validateCamiseta(){}

export function create(comandaNew) {
    const validationMsg = validateComanda(comandaNew);
    if (validationMsg) return { error: validationMsg };
    comandas.push({ id: alumnoNew.id, nombre: alumnoNew.nombre, curso: alumnoNew.curso });
     return { data: comandaNew };
}