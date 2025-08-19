const toCelsius = require('../src/utils/toCelsius');

describe('toCelsius', () => {
	it('convierte 32°F a 0.0°C', () => {
		expect(toCelsius(32)).toBe(0.0);
	});

	it('convierte 212°F a 100.0°C', () => {
		expect(toCelsius(212)).toBe(100.0);
	});

	it('convierte -40°F a -40.0°C', () => {
		expect(toCelsius(-40)).toBe(-40.0);
	});

	it('lanza TypeError si el valor no es número finito', () => {
		expect(() => toCelsius('a')).toThrow(TypeError);
		expect(() => toCelsius(NaN)).toThrow(TypeError);
		expect(() => toCelsius(Infinity)).toThrow(TypeError);
	});
});
const toCelsius = require('../src/utils/toCelcius');