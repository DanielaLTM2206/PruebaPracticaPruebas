
function toCelsius(f) {
  if (!Number.isFinite(f)) throw new TypeError('El valor debe ser un número finito');
  return Number(((f - 32) * 5 / 9).toFixed(1));
}
module.exports = toCelsius;