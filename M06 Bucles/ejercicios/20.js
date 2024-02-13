function sumarHastaNConBreak(n) {
  // La función recibe un numero n por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Si la suma supera a 100, detén el bucle usando break.
  // Tu código:
  let suma = 0;
  for (let index = 1; index <= n; index++) {
    suma += index;
  }
  console.log(suma);
}

module.exports = sumarHastaNConBreak;
