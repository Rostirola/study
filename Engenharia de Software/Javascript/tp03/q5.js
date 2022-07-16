function triangulo() {
 
  let ladoA     = Number(document.getElementById(`ladoA`).value),
      ladoB     = Number(document.getElementById(`ladoB`).value),
      ladoC     = Number(document.getElementById(`ladoC`).value),
      resultado = ``;

  if (ladoA == ladoB && ladoB == ladoC) {

    resultado = `equilatero`;

  } else {

    if (ladoA != ladoB && ladoB != ladoC && ladoA != ladoC) {

      resultado = `escaleno`;

    } else {

      resultado = `isosceles`;

    }
  }

  document.getElementById('r5').innerHTML = (`este triangulo: ${resultado}`);
}