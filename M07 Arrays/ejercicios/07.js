function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  const arrayMayusculas = array.map((elem) => elem.toUpperCase());
  return arrayMayusculas;
}

module.exports = convertirStringAMayusculas;
