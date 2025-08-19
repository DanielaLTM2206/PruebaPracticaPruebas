


function movingAverage(series, window) {
  if (!Array.isArray(series) || series.some(x => !Number.isFinite(x))) {
    throw new TypeError('La serie debe ser un arreglo de números finitos');
  }
  if (!Number.isInteger(window) || window < 2 || window > series.length) {
    throw new RangeError('La ventana debe ser un entero entre 2 y el tamaño de la serie');
  }
  const result = [];
  for (let i = 0; i <= series.length - window; i++) {
    const avg = series.slice(i, i + window).reduce((a, b) => a + b, 0) / window;
    result.push(Number(avg.toFixed(2)));
  }
  return result;
}
module.exports = movingAverage;