const empleados = [{
        id: 1,
        nombre: "Fernando"

    },
    {
        id: 2,
        nombre: "Linda"

    },
    {
        id: 3,
        nombre: "Karen"
    }
];

const salarios = [{
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1500

    }
];

const getEmpleado = (id, callback) => {

    const empleado = empleados.find(e => e.id === id)

    if (empleado) {
        callback(null, empleado)
    } else {
        callback(`El empleado con ${id} no existe`);
    }

}

// console.log(getEmpleado(3), (empleado) => {
//     console.log(empleado);
// });


const id = 1;
getEmpleado(id, (err, empleado) => {
    if (err) {
        console.log('Error!');
        return console.log(err);
    }

    console.log('Empleado existe!');
    console.log(empleado);

})


const getSalario = (id, callback) => {

    const salario = salarios.find(s => s.id === id).salario;

    if (salario) {
        callback(null, salario)

    } else {
        callback(`Salario $ { id } no existe`);
    }
}


getSalario(1, (err, salario) => {


    if (err) {
        console.log('Error!');
        return console.log(err);
    }
    console.log('Salario existe');
    console.log(salario.salario);
});