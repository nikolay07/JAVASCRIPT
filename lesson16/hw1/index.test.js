import { createArrayOfFunctions } from './index'
it('should get number', () => {
    const result = createArrayOfFunctions(9)[5]();
    expect(result).toEqual(5);
});
it('should get if transmitted not a number', () => {
    const result = createArrayOfFunctions('');
    expect(result).toEqual(null);
});
it('should get if transmitted nothing', () => {
    const result = createArrayOfFunctions();
    expect(result).toEqual([]);
});