const ENDPOINT_LOGIN = "https://fakestoreapi.com/auth/login"
const ENDPOINT_GET_ALL_USERS = "https://fakestoreapi.com/users"
async function iniciarSesion(event){
    event.preventDefault()
    const username = event.target.username.value
    const password = event.target.password.value
    const formulario = JSON.stringify({
        username: username,
        password: password
    })
    const headers = new Headers()
    headers.append("Content-Type", "application/json")

    try {
        let respuesta = await fetch(ENDPOINT_LOGIN, {
            method: "POST",
            headers: headers,
            body: formulario,
            mode: "cors",
            cache: "default",
        })
        let datos = await respuesta.json()
        console.log(datos)

        if(datos.token){
            respuesta = await fetch(ENDPOINT_GET_ALL_USERS)
            datos = await respuesta.json()
            const usuario = Array.from(datos).map(usuario => {
                return {
                    id: usuario.id,
                    username: usuario.username
                }
            }).filter(usuario => usuario.username === username)[0]
            console.log(usuario.id)
            document.cookie = `usuarioLogueado=${usuario.id}`
            window.location.replace("index.html")
        }
    } catch (error) {
        console.log(error);
    }
}