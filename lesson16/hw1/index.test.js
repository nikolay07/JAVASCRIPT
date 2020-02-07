import { createArrayOfFunctions } from './index'
it('should get number', () => {
    const result = createArrayOfFunctions(9)[5]();
    expect(result).toEqual(5);
});