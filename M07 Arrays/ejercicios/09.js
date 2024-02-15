function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
  let elementos = 0;
  array.map((num) => {
    if (num > 10) {
      elementos++;
    }
  });
  return elementos;
}

module.exports = contarElementosMayoresA10;
