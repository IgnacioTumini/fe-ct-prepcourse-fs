function encontrarElemento(elemento, array) {
  // Busca el elemento pasado por argumento dentro del array.
  // Si no se encuentra, retorna -1.
  // Tu código:
  const elementoEncontrado = array.findIndex((elem) => elem === elemento);
  return elementoEncontrado !== undefined ? elementoEncontrado : -1;
}

module.exports = encontrarElemento;
