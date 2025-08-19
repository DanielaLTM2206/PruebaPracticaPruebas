function toFahrenheit(c) {
  if (!Number.isFinite(c)) throw new TypeError('El valor debe ser un número finito');
  return Number(((c * 9 / 5) + 32).toFixed(1));
}
module.exports = toFahrenheit;