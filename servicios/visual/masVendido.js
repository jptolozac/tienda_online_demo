import { cargarProductos } from "../carga/cargarProductos.js"

export const masVendido = (productos) => {
    const ordenar = productos
    for(let i=0; i<ordenar.length; i++){
        for(let j=i; j<ordenar.length; j++){
            if(ordenar[i].puntuacion.cantidad < ordenar[j].puntuacion.cantidad){
                const aux = ordenar[i]
                ordenar[i] = ordenar[j]
                ordenar[j] = aux
            }
        }
    }
    cargarProductos({ 
        datos: ordenar.slice(0, 12),
        titulo: "Lo más vendido"
    })
}
