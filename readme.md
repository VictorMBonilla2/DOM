# Instalar tailwind

#npm install -D tailwindcss

#ejecutar para instalar

# ejecutar para Instalar swingaler

npm install sweetalert2

# Proyecto de Ejemplo

Acá se explicará cómo instalar y montar un json-server, necesario para simular servidores remotamente.

## Programas necesarios

- **Node.js (versión recomendada v20.15.0)**
- **json-server**

## Instalación

1. Instalar Node.js:
   Se proporciona el enlace de descarga para Node.js en la [web oficial](https://nodejs.org/en).

2. Instalar las dependencias de json-server:
   Para instalar json-server, abre tu consola de preferencia (preferiblemente Git Bash) e introduce el siguiente código:

    ```bash
    npm install -g json-server
    ```
   Con esto se instalarán las dependencias necesarias en tu equipo.

## Uso

Para ejecutar el servidor, usaremos un archivo de ejemplo. Basate en este ejemplo para montar el servidor con tu información.

1. Crea el siguiente archivo:

    ```bash
    db.json
    ```

2. Dentro de este archivo, introduce lo siguiente:

    ```json
    {
      "posts": [
        { "id": "1", "title": "a title", "views": 100 },
        { "id": "2", "title": "another title", "views": 200 }
      ],
      "comments": [
        { "id": "1", "text": "a comment about post 1", "postId": "1" },
        { "id": "2", "text": "another comment about post 1", "postId": "1" }
      ],
      "profile": {
        "name": "typicode"
      }
    }
    ```

Para iniciar el servidor, usa el siguiente comando en tu consola:

```bash
npx json-server **db.json**
```
db.json seria el nombre del archivo. reemplazalo según tu caso.

