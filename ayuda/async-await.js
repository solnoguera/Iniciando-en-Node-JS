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


getInfoEmpleado = async(id) => {

    try{

        const empleado = await getEmpleadoByID(id);
        const salario = await getSalarioByID(id);

        return `El empleado ${empleado.nombre} tiene $ ${salario} de salario`;

    }catch(error){
        throw error
    }

}
const id = 7;
getInfoEmpleado(id)
    .then( msg => console.log(msg))
    .catch( err => console.log(err));