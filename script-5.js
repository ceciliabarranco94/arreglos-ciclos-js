/*Exercise #5

For each of the exercises below, assume you are starting with the following people array.

let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];

    1. Write a command that prints out all of the people in the list.
    2. Write the command to remove "Dani" from the array.
    3. Write the command to remove "Juan" from the array.
    4. Write the command to move "Luis" to the front of the array.
    5. Write the command to add your name to the end of the array.
    6. Using a loop, iterate through this array and after console.log "Maria", exit from the loop.
    7. Write the command that gives the indexOf where "Maria" is located.
    
At the end of the exercise, there should be 4 people in the array.
*/

let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];

console.log(people); // 1. Imprimir array

let index = people.indexOf("Dani");
if (index !== -1) {
    people.splice(index, 1);  // 2. Quitar "Dani" 
}

index = people.indexOf("Juan");
if (index !== -1) {
    people.splice(index, 1);  // 3. Quitar "Juan" 
}

index = people.indexOf("Luis");
if (index !== -1) {
    people.splice(index, 1);  // 4. Quitar "Luis" 
    people.unshift("Luis");  //  4.1 Agregar "Luis" al principio del array
}


people.push("Cecilia");  // 5. Agregar mi nombre al final del array


for (let i = 0; i < people.length; i++) {
    if (people[i] === "Maria") {
        console.log(people[i]);
        break;  // 6. Salir del loop despues de imprimir "Maria"
    }
}


let mariaIndex = people.indexOf("Maria");
console.log(mariaIndex);  // 7. Encontar "Maria" en el array


console.log(people); // 8. Imprimir array final - ['Luis', 'Maria', 'Camila', 'Cecilia']



//DOCUMENTACIÓN ejercicios Serch
/**
 * // Buscar el postres "Flan" 
    // Si existe mostrar "El flan existe"
    // Si no existe mostrar "El flan no existe"
    // Para evaluar usar el operador ternario.     evaluación ? valor si verdadero : valor si falso
    postres.indexOf('Flan') != -1 ? console.log('El flan existe'): console.log('El flan no existe');
    const msjExistencia = postres.indexOf("Flan") === -1 ? "El flan no existe" : "El flan existe";
    console.log(msjExistencia);

    console.log( postres.indexOf("Flan") != -1 ? "El flan existe" : "El flan no existe" );

    // =================================================
    // El método slice crea una copia superficial de un fragmento de un array y devuelve un nuevo array.


    const pasteles = ["Pastel de Chocolate", "Pastel de Zanahoria", "Pastel de Limón"];

    const eliminarPastel = ( array, indice ) => {
        const copyArray = array.slice();    
        const pastelEliminado = copyArray.splice(indice, 1);
        console.log( copyArray ); // ["Pastel de Chocolate", "Pastel de Limón"]
        return pastelEliminado;
    }

    eliminarPastel( pasteles, 1 ); 
    console.log( pasteles ); // ["Pastel de Chocolate", "Pastel de Zanahoria", "Pastel de Limón"]

 */