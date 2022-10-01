function integrate(coefficient, exponent) {
  exponent += 1;
  coefficient = coefficient / exponent;
  return String(`${coefficient}x^${exponent}`);
}