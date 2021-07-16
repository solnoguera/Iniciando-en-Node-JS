const empleados = [
    {
        id : 1,
        nombre : "Pu",
        salario: 1000,
    },
    {
        id : 2,
        nombre : "Po", 
        salario: 1500,
    },
    {
        id : 3,
        nombre : "Mona",
    },
]



const getEmpleadoByID = (id) => {
    
    return new Promise( (resolve, reject) => {

        const empleado = empleados.find(  (e) => e.id == id);

        (empleado) ? resolve(empleado) : reject('Error! Id no valido');
    });

}


const getSalarioByID = (id) => {

    return new Promise(  (resolve, reject) => {

        const empleado = empleados.find( (e) => e.id == id );
        const salario = empleado.salario;
        (salario) ? resolve(salario) : reject(`Error! No existe salario con id ${id}`);
    });

}

/** 
getSalarioByID(2)
    .then( salario => console.log(salario))
    .catch( err => console.log(err));


getEmpleadoByID(2)
    .then(empleado => console.log(empleado.nombre))
    .catch(err => console.log(err));
*/
const id = 3;
let nombre;
getEmpleadoByID(id)
    .then( empleado => {
        nombre = empleado.nombre;
        return getSalarioByID(id)
    })
    .then(salario => console.log(nombre, ": Gana ", salario))
    .catch(err => console.log(err));