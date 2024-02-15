function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "string" && array[i].length >= 5) {
      return array[i];
    }
  }
  return undefined;

  
}

module.exports = obtenerPrimerStringLargo;
