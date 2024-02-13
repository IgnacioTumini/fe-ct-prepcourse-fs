function colors(color) {
  // La función recibe un color. Retorna el string correspondiente:
  // En caso que el color recibido sea "blue"   --> "This is blue".
  // En caso que el color recibido sea "red"    --> "This is red".
  // En caso que el color recibido sea "green"  --> "This is green".
  // En caso que el color recibido sea "orange" --> "This is orange".
  // Si no es ninguno de esos colores           --> "Color not found".
  // PISTA: utilizar el statement SWITCH.
  // Tu código:
  return color === "blue"
    ? "This is blue"
    : color === "red"
    ? "This is red"
    : color === "green"
    ? "This is green"
    : color === "orange"
    ? "This is orange"
    : "Color not found";
}

module.exports = colors;
