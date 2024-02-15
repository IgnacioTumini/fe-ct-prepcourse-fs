function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
  return array.every((num) => array[0] === num);
}

module.exports = todosIguales;
