const fs = require('fs');

const escribirArchivo = (archivo, cadena) => fs.writeFileSync(archivo, cadena);

escribirArchivo('./test1.txt', 'Hola soy la prueba 1');
escribirArchivo('./test2.txt', 'Hola soy la prueba 2');
escribirArchivo('./test3.txt', 'Hola soy la prueba 3');

