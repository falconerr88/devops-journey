const http = require('http');

const PORT = process.env.PORT || 3000;

const html = `
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Mi Página Node.js</title>
</head>
<body>
    <h1><!-- Creando pagina con NODE.JS --></h1>
    <p><!-- creando mi segundo contenedor esta vez con nosejs  --></p>
</body>
</html>
`;

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(html);
});

server.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});