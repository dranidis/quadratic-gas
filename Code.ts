function quadraticSolution(a, b, c, which) {
  const discriminant = b * b - 4 * a * c;

  if (discriminant > 0) {
    const sqd = Math.sqrt(discriminant)

    if (which == 0)
      return (-b + sqd) / (2 * a)
    else
      return (-b - sqd) / (2 * a)
  }
  else {
    return NaN;
  }
}

function fahrenheitToCelcius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}


function celciusToFahrenheit(celcius) {
  return celcius * 9 / 5 + 32;
}