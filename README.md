**Proyecto 7**

**Just dance**   

Este proyecto ha sido creado con la intención de agrupar diferentes academias de baile con sus diferentes estilos de baile, donde se incluyen datos como sus horarios. Habrá dos tipos de usuarios, los admins, que serán los directores de las academias, y los alumnos, que serán user.

**¿Cómo iniciar el proyecto?**

- npm i
- npm run dev
- npm run danceSeed: para añadir datos al modelo Bailes.

**¿Qué variables se han usado en el proyecto?**

- DB\_URL
  - JWT\_SECRET

**¿Qué librerías tenemos instaladas?**

- Express
- Mongoose
- Nodemon
- Dotenv
- Jsonwebtoken
- Bcrypt

**Endpoints**

**Dance**

*En la siguiente tabla tendrás la información referida a los endpoits utilizados en este proyecto, referido a los bailes![](Aspose.Words.5359177b-a4d0-44ea-aaf3-2413f1bc3363.001.png)*



|**Método**|**Ruta**|**Descripción**|
| - | - | - |
|GET|/api/v1/dances|Obtener todos los estilos de bailes|
|POST|/api/v1/dances|Crear un nuevo estilo de baile|
|PUT|/api/v1/dances/:id|Actualizar un estilo de baile por ID|
|DELETE|/api/v1/dances/:id|Eliminar un estilo de baile por ID|

**Academies**

*En la siguiente tabla tendrás la información referida a los endpoits utilizados en este proyecto, referido a los bailes![](Aspose.Words.5359177b-a4d0-44ea-aaf3-2413f1bc3363.002.png)*

**Método Ruta Descripción![](Aspose.Words.5359177b-a4d0-44ea-aaf3-2413f1bc3363.003.png)![](Aspose.Words.5359177b-a4d0-44ea-aaf3-2413f1bc3363.004.png)**

GET /api/v1/academies Obtener todas las academias ![](Aspose.Words.5359177b-a4d0-44ea-aaf3-2413f1bc3363.005.png)![](Aspose.Words.5359177b-a4d0-44ea-aaf3-2413f1bc3363.006.png)POST /api/v1/academies Crear una nueva academia

PUT /api/v1/academies/:id Actualizar una academia por ID DELETE /api/v1/academies/:id Eliminar una academia por ID

**Users**

*En la siguiente tabla tendrás la información referida a los endpoits utilizados en este proyecto, referido a los usuarios![](Aspose.Words.5359177b-a4d0-44ea-aaf3-2413f1bc3363.007.png)*



|**Método**|**Ruta**|**Descripción**|
| - | - | - |
|POST|/api/v1/users/register|Registrar un nuevo usuario|
|GET|/api/v1/users|Obtener todos los usuarios|
|POST|/api/v1/users/login|Iniciar sesión de usuario|
|DELETE|/api/v1/users/:id|Eliminar un usuario por ID (admin o user)|
|PUT|/api/v1/users/:id|Actualizar un usuario por ID (admin)|

