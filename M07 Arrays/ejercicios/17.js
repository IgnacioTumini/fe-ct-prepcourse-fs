function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:
  let tablaDelSeis = [];
  for (let i = 0; i <= 10; i++) {
    tablaDelSeis.push(i * 6);
  }
  return tablaDelSeis;
}

module.exports = tablaDelSeis;
