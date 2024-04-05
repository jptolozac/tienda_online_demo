import { cargarProductos } from "../carga/cargarProductos.js"

export const popular = (ordenPorPuntuacion) => {
    for(let i=0; i<ordenPorPuntuacion.length; i++){
        for(let j=i; j<ordenPorPuntuacion.length; j++){
            if(ordenPorPuntuacion[i].puntuacion.estrellas < ordenPorPuntuacion[j].puntuacion.estrellas){
                const aux = ordenPorPuntuacion[i]
                ordenPorPuntuacion[i] = ordenPorPuntuacion[j]
                ordenPorPuntuacion[j] = aux
            }
        }
    }
    cargarProductos({ 
        datos: ordenPorPuntuacion.slice(0, 12),
        titulo: "Lo mejor"
    })
}