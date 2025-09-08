# Devops-Journey
## Las imagenes que voy subiendo tambien las voy a subir a DockerHub : https://hub.docker.com/repository/docker/falconerr88/imagenes-pruebas/general
aca voy a ir subiendo todo lo que hago mientras me preparo para ser DevOps

el 7/9/2025 cree un servidor con nginx y otro con nodejs y javascripts para ir aprendiendo los comandos de docker y aprendiendo a hacer dockerfiles 
mas tarde en ese mismo dia hize otro servidor con pythonflask y lo puse para correr en un contenedor tambien.

# Proyecto Docker Compose — Node.js + Flask + Nginx

Este proyecto levanta un entorno con **tres servicios** usando `docker-compose`:

- **Node.js** → Servidor en el puerto **3001**
- **Flask** → Servidor en el puerto **5000**
- **Nginx** → Servidor en el puerto **80**

## **Comandos principales**

### **Levantar los contenedores**
```bash
docker compose up

Por defecto se ejecuta en primer plano.
Si preferís en segundo plano:

docker compose up -d

Detener los contenedores

docker compose down

Reconstruir las imágenes

Si hiciste cambios en el código o en los Dockerfile:

docker compose build --no-cache
##  Acceso a los servidores

Node.js	 http://localhost:3001

Flask    http://localhost:5000

nginx    http://localhost:8081
