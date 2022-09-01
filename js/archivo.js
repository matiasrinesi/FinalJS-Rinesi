const tablaCamisetas = document.getElementById("tablaCamisetas")
const boton1 = document.getElementById("boton1")
// creo la función para obtener informacion del archivo json y la muestro en el DOM mediante innerHTML
async function mostrarCamisetas() { // Le pongo async para aclarar que va a haber elementos asincronos en la funcion
    const camisetas = await fetch('./json/camisetas.json') // Defino que algo es asincrono con await
    const camisetasParseadas = await camisetas.json()
    tablaCamisetas.innerHTML = `
        <table class="table">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Equipo</th>
                <th scope="col">Modelo</th>
                <th scope="col">Precio</th>
                <th scope="col">Talle</th>
                <th scope="col"></th>
                <th scope="col"></th>
               
            </tr>
        </thead>
            <tbody id="tBody">
            </tbody>
            <tr> 
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col"></th> 
            </tr>
        </table>
    
    `
    //Establezco las características que se van a mostrar en el DOM, para cada camiseta
    camisetasParseadas.forEach((camiseta, indice) => {
        tBody.innerHTML += `

                <tr class="table-light" id="producto${indice + 1}">
                <th scope="row">${indice + 1}</th>
                <td>${camiseta.equipo}</td>
                <td>${camiseta.modelo}</td>
                <td>$${camiseta.precio}</td>
                <td>${camiseta.apellido}</td>
                <td><img src="./images/${camiseta.img}"></td>
                
                </tr>
        `
})}






// Creo botón para ejecutar la función

boton1.addEventListener('click', mostrarCamisetas)

boton1.addEventListener('click', () => {
    mostrarCamisetas()
})