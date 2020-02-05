import squareOfMinNumber from './getMinSquaredNumber'

it('should get empty array', () => {
    const result = squareOfMinNumber([]);
    expect(result).toEqual(null);
});
it('should get string', () => {
    const result = squareOfMinNumber('');
    expect(result).toEqual(null);
});
it('should get square of min number', () => {
    const result = squareOfMinNumber([-777, 3, -2, 6, 45, -20]);
    expect(result).toEqual(4);
});