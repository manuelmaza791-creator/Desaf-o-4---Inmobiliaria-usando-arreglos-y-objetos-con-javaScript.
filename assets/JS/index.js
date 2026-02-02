import {propiedadesEnVenta, propiedadesEnAlquiler} from "./arreglopropiedades.js";

export const mostrarPropiedades = (arraysPropiedades, contenedorHTML) => {

    const container = document.querySelector(contenedorHTML)

    let contador = 0;

    let contenidoHTML = '';

    for (const propiedad of arraysPropiedades) {

        if (contador < 3) {

            contenidoHTML += `
            <div class="propiedadCard">
            <img src="${propiedad.src}" alt="propiedad">
            <h3>${propiedad.nombre}</h3>
            <p>${propiedad.descripcion}</p>
            <p> <i class="bi bi-geo-alt-fill"></i> ${propiedad.ubicación}</p>
            <p> <i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones | <i class="fas fa-bath"></i> ${propiedad.baños} baños</p>
            <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo} </p>
            <p style="color:${propiedad.smoke ? 'green' : 'red'}"> 
                ${propiedad.smoke ? '<i class="fas fa-smoking"></i> Permitido fumar' : '<i class="fas fa-smoking-ban"></i> No se permite fumar'}
            </p>
            <p style="color:${propiedad.pets ? 'green' : 'red'}">
                ${propiedad.pets ? '<i class="fa-solid fa-paw"></i> Mascotas permitidas' : '<i class="fa-solid fa-ban"></i> No se permiten mascotas'}
            </p>
            
            </div>
            `
            contador++;
            
        }

    }   
        container.innerHTML = contenidoHTML;

}

mostrarPropiedades(propiedadesEnVenta, ".propiedadesEnVentaContainer");
mostrarPropiedades(propiedadesEnAlquiler, ".propiedadesEnAlquilerContainer");
