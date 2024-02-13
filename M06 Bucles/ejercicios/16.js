function saludo(idioma) {
  // Retornar un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!".
  // Si "idioma" es "mandarin", devuelve "Ni Hao!".
  // Si "idioma" es "ingles", devuelve "Hello!".
  // Si "idioma" no es ninguno de los anteriores o es `undefined`, devuelve "Hola!".
  // Tu código:
  return idioma === "aleman"
    ? "Guten Tag!"
    : idioma === "mandarin"
    ? "Ni Hao!"
    : idioma === "ingles"
    ? "Hello!"
    : "Hola!";
}

module.exports = saludo;
