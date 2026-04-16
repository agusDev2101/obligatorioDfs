# Mongo compass (ejemplo)

mongodb+srv://usuarioPrueba:<pass>@cluster0.gxsgykz.mongodb.net/

# Instalaciones

npm install express mongoose bcrypt jsonwebtoken redis dotenv joi
npm install --save-dev nodemon

# Pagina redis

https://cloud.redis.io/#/login

# Pasaje a vercel

<!-- En VSC ir a la seccion de git, subir el proyecto a github -->

<!-- modificar el archivo app.js para que solo exporte app pero no levante el server -->
<!-- crear una carpeta api a nivel de proyecto, dentro un archivo index.js y exportar app.js -->

crear un archivo dentro de src llamado server.js que importe app.js y levante el server
en package json llamar al server.js

agregar un archivo vercel.json

en la pagina de vercel:

ir a new -> project y conectarse a github ahi aparecen los proyectos, luego import, agregar el archivo con las variables de entorno

si falla revisar la base en mongo que tenga conexion 0.0.0.0/0
