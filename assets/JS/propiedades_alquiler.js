import {propiedadesEnAlquiler} from "./arreglopropiedades.js";

const container = document.querySelector("#containerPropiedades");

export const enAlquiler = (propiedadesEnAlquiler) => {
    let contenidoHTML = "";
    for (let propiedad of propiedadesEnAlquiler) {

        contenidoHTML += `
        <div class="propiedadCard">  
            <img src="${propiedad.src}" alt="propiedad">
            <h3>${propiedad.nombre}</h3>
            <p>${propiedad.descripcion}</p>
            <p> <i class="bi bi-geo-alt-fill"></i>  ${propiedad.ubicación}</p>
            <p> <i class="fas fa-bed"></i> ${propiedad.habitaciones} habitaciones | <i class="fas fa-bath"></i> ${propiedad.baños} baños </p>
            <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo} </p>
            <p style="color:${propiedad.smoke ? 'green' : 'red'}">
                ${propiedad.smoke ? '<i class="fas fa-smoking"></i> Permitido fumar' : '<i class="fas fa-smoking-ban"></i> No se permite fumar'}
            </p>
            <p style="color:${propiedad.pets ? 'green' : 'red'}">
                ${propiedad.pets ? '<i class="fa-solid fa-paw"></i> Mascotas permitidas' : '<i class="fa-solid fa-ban"></i> No se permiten mascotas'}
            </p>
       
        </div>
        `
    }

    container.innerHTML = contenidoHTML;
}

 enAlquiler(propiedadesEnAlquiler);