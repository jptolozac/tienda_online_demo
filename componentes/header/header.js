import { getCookie } from "../../servicios/cookies/cookies.js"
import { carrito } from "./carrito.js"
import { login } from "./login.js"
import { logout } from "./logout.js"

export const Header = () => {
    /* eliminarCookie("usuarioLogueado")
    console.log(getCookie("usuarioLogueado"))
    setCookie("usuarioLogueado", 5) */
    const elementos = getCookie("usuarioLogueado") ? (carrito() + logout()) : login()
    return `
        <nav>
            <span class="logo">
                <a href="./index.html">
                    👜 Tienda Online
                </a>
            </span>
            <form action="./resultados.html" class="barra-de-busqueda">
                <input type="text" name="busqueda" id="busqueda" />
                <button>🔍</button>
            </form>
            <span class="contenedor-carrito-login">
                ${elementos}
            </span>
        </nav>
    `
}