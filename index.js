const http = require("http");
//CREA UN SERVIDOR
//REQ = PETICION
//RES = RESPUESTA

const app = http.createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "application/json" });
  response.end("Servidor node iniciado");
});
const PORT = 3000;
app.listen(PORT);
console.log(`Servidor levantado en el puerto ${PORT}`);
