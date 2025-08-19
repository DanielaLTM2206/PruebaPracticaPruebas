const toFahrenheit = require('../src/utils/toFahrenheit');

describe('toFahrenheit', () => {
  it('convierte 0°C a 32.0°F', () => {
    expect(toFahrenheit(0)).toBe(32.0);
  });

  it('convierte 100°C a 212.0°F', () => {
    expect(toFahrenheit(100)).toBe(212.0);
  });

  it('convierte -40°C a -40.0°F', () => {
    expect(toFahrenheit(-40)).toBe(-40.0);
  });

  it('lanza TypeError si el valor no es número finito', () => {
    expect(() => toFahrenheit('a')).toThrow(TypeError);
    expect(() => toFahrenheit(NaN)).toThrow(TypeError);
    expect(() => toFahrenheit(Infinity)).toThrow(TypeError);
  });
});