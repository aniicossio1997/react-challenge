# Acerca del proyecto

Cada vez que el usuario inicie sesión por default contara con seis héroes en su equipo, (los ID del equipo como el JWT se guardaran en el localstorage ), cuando cierre su sesión se limpiara los valores del localstorage.

### vista del equipo

![alt text](https://github.com/aniicossio1997/react-challenge/blob/main/myTeam.png)

## Reglas de negocio:

- Se podrá realizar alta y baja de los héroes para modificar el equipo y se podrá ver el detalle de un héroe.
- El equipo como máximo debe estar conformado por 6 héroes, y a su vez solo debe haber tres miembros con orientación buena y tres con orientación mala.

- No se puede tener héroes repetidos.

## Estructura del proyecto:

![alt text](https://github.com/aniicossio1997/react-challenge/blob/main/challenge.png)

- Context: En este directorio se encuentra el AuthContext en donde verifica que exista el token (JWT).

- Pages: En esta directorio se encuentran las paginas principales de la aplicación

- Components: En este se encuentra todos los componentes utilizados (team y el user), ademas cuenta con el directorio **common** (los componentes en comunes de la aplicación, como loading y los alert)

- Hooks: los hooks utilizados en la aplicación.

- layout: Las partes estáticas reutilizables.

- redux: los reducer utilizados.

- **Para iniciar el proyecto**

- npm install // yarn install

- npm start //yarn start

- Es necesario que el navegador cuente con [CORS Unblock](https://chrome.google.com/webstore/detail/cors-unblock/lfhmikememgdcahcdlaciloancbhjino), para no tener problemas al buscar un héroe para agregar al equipo

## Librerías utilizadas

- react-redux: "^7.2.5"

- redux-thunk: "^2.3.0",

- axios: "^0.21.1",

- bootstrap": "^4.6.0",

- formik: "^2.2.9",
