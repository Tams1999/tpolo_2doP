let tareas = ["Jugar xbox", "realizar tarea de programación", "nadar"];

// INSERTAR CÓDIGO PARA AGREGAR ELEMENTO AL ARREGLO
tareas.push("Ir al cine");
tareas.push("Estudiar para Ing. de SW II");

console.log("Mi lista de actividades");
console.log("************");

tareas.forEach(function(tarea, indice) {
    console.log(`${indice + 1}.-${tarea}`);
});
