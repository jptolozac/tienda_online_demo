export function logout(){
    return `<a href="index.html" class="logueo" onclick="cerrarSesion(event)">
                <img src="./public/logout.svg" alt="ícono de usuario" class="icono-logueo"/>
                <span>Cerrar Sesión</span>
            </a>`
}