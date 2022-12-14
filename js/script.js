

class Usuario {
    constructor(nombre, email, contraseña) {
        this.nombre = nombre
        this.email = email
        this.contraseña = contraseña
    }
}

const Usuarios = []


const formRegistrar = document.getElementById(`idForm`)
// Obtengo la información del formulario, pusheo los nuevos usuarios al array vacío y guardo la info en el local storage
formRegistrar.addEventListener(`submit`, (e) => {
    e.preventDefault()

    let nombre = document.getElementById(`idNombre`).value
    let email = document.getElementById(`idMail`).value
    let contraseña = document.getElementById(`idContraseña`).value

    const usuario = new Usuario(nombre, email, contraseña)
    Usuarios.push(usuario)

    localStorage.setItem(`Usuarios`, JSON.stringify(Usuarios))
    formRegistrar.reset()
   //creo un Toastify para que salte una alerta al apretar el botón
    Toastify({
        text: "¡Te has registrado!",
        duration: 3000,
        close: true,
        gravity: "top",
        position: "center",
        stopOnFocus: true, 
        style: {
            

            background: "linear-gradient(to bottom left, rgba(12, 1, 167, 1.0), rgba(255, 255, 255, 1.0));"

            
        },
        onClick: function () {
            console.log("Funcionó, click")
        }
    }).showToast();
})

const formIngresar = document.getElementById('formIngresar')
// Comparo la info ingresada por el usuario con la info del local storage, si coincide le permito ingresar
formIngresar.addEventListener('submit', (e) => {
    e.preventDefault()
    let nombreIngreso = document.getElementById('NombreIngreso').value
    let contraseñaIngreso = document.getElementById('ContraseñaIngreso').value

    let userStorage = JSON.parse(localStorage.getItem(`Usuarios`))

    let user = userStorage.find(Usuario => Usuario.nombre == nombreIngreso)
    let password = userStorage.find(Usuario => Usuario.contraseña == contraseñaIngreso)
    if (user == undefined || password == undefined) {
        console.log('error')
        let incorrecto = document.getElementById('incorrecto')
        incorrecto.innerHTML = `
        <p class='text-danger m-4'> <i class="fa-solid fa-circle-xmark"></i>     usuario o contraseña incorrecta </p>
        `
    } else {
        Swal.fire({
            icon: 'success',
            title: `Bienvenido/a ${nombreIngreso}!`,
            showDenyButton: false,
            text: 'Bienvenido/a a la tienda de Shirtmuseum',
            showCancelButton: false,
            confirmButton: '<a href="pedidos.html"></a>',

            confirmButtonText: '<a href="pedidos.html">¡Hace tu pedido!</a> ',

        })
    }
    formLog.reset()
})