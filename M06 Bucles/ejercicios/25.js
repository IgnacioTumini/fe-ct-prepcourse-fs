function esPalindromo(string) {
  // La función recibe un argumento "string".
  // Verifica si este string es palíndromo o no.
  // Retorna true si lo es, caso contrario, retorna false.
  // IMPORTANTE: Un palíndromo es una palabra o frase
  // que se lee igual hacia adelante que hacia atrás.
  // Tu código:
  const stringSinEspacios = string.toLowerCase().replace(/\s/g, "");
  const stringReverso = stringSinEspacios.split("").reverse().join("");
  return stringSinEspacios === stringReverso;
}

module.exports = esPalindromo;
