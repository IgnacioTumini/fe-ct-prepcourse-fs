function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (
      array[i] === "Noviembre" ||
      array[i] === "Marzo" ||
      array[i] === "Enero"
    ) {
      newArray.push(array[i]);
    }
  }
  if (newArray.includes("Enero", "Marzo", "Noviembre")) {
    return newArray;
  } else return "No se encontraron los meses pedidos";
}

module.exports = mesesDelAño;
