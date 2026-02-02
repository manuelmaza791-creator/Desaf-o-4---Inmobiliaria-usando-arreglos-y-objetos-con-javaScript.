import {propiedadesEnVenta} from "./arreglopropiedades.js";

const container = document.querySelector("#containerPropiedades");

export const enVenta = (propiedadesEnVenta) => {
    let contenidoHTML = "";
    for (let propiedades of propiedadesEnVenta) {

        contenidoHTML += `
        <div class="propiedadCard">
            <img src="${propiedades.src}" alt="propiedad">
            <h3>${propiedades.nombre}</h3>
            <p>${propiedades.descripcion}</p>
             <p> <i class="bi bi-geo-alt-fill"></i> ${propiedades.ubicación}</p>
            <p> <i class="fas fa-bed"></i> ${propiedades.habitaciones}  habitaciones | <i class="fas fa-bath"></i> ${propiedades.baños} baños</p>
            <p><i class="fas fa-dollar-sign"></i> ${propiedades.costo} </p>
            <p style="color:${propiedades.smoke ? 'green' : 'red'}">
                ${propiedades.smoke ? '<i class="fas fa-smoking"></i> Permitido fumar' : '<i class="fas fa-smoking-ban"></i> No se permite fumar'}
            </p>
            <p style="color:${propiedades.pets ? 'green' : 'red'}">
                ${propiedades.pets ? '<i class="fa-solid fa-paw"></i> Mascotas permitidas' : '<i class="fa-solid fa-ban"></i> No se permiten mascotas'}
            </p>
        </div>

        `
    }

    container.innerHTML = contenidoHTML;
}

 enVenta(propiedadesEnVenta);