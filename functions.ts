
function quadraticSolution(a: number, b: number, c: number, first: boolean): number {
  const discriminant = b * b - 4 * a * c;

  if (discriminant > 0) {
    const sqd = Math.sqrt(discriminant)

    if (first)
      return (-b + sqd) / (2 * a)
    else
      return (-b - sqd) / (2 * a)
  }
  else {
    return NaN;
  }
}

function fahrenheitToCelcius(fahrenheit: number): number {
  return (fahrenheit - 32) * 5 / 9;
}


function celciusToFahrenheit(celcius: number): number {
  return celcius * 9 / 5 + 32;
}