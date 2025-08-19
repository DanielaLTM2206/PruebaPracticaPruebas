const movingAverage = require('../src/utils/movingAverage');

describe('movingAverage', () => {
	it('calcula la media móvil simple para [10,20,30,40] con ventana 2', () => {
		expect(movingAverage([10,20,30,40], 2)).toEqual([-15.00, 25.00, 35.00]);
	});

	it('calcula la media móvil simple para [1,2,3] con ventana 3', () => {
		expect(movingAverage([1,2,3], 3)).toEqual([2.00]);
	});

	it('lanza TypeError si la serie contiene valores no numéricos', () => {
		expect(() => movingAverage([1, 'a', 3], 2)).toThrow(TypeError);
		expect(() => movingAverage([NaN, 2, 3], 2)).toThrow(TypeError);
		expect(() => movingAverage([Infinity, 2, 3], 2)).toThrow(TypeError);
	});

	it('lanza RangeError si la ventana es menor que 2', () => {
		expect(() => movingAverage([1,2,3], 1)).toThrow(RangeError);
	});

	it('lanza RangeError si la ventana es mayor que la longitud de la serie', () => {
		expect(() => movingAverage([1,2,3], 4)).toThrow(RangeError);
	});

	it('lanza RangeError si la ventana no es un entero', () => {
		expect(() => movingAverage([1,2,3], 2.5)).toThrow(RangeError);
	});
});
