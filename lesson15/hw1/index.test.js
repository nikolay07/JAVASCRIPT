import { createCalculator } from './index'
it('should get added number', () => {
    const addNumber = createCalculator();
    expect(addNumber.add(5)).toEqual(5);
});
it('should get decrease number', () => {
    const addNumber = createCalculator();
    expect(addNumber.decrease(5)).toEqual(-5);
});
it('should get reset number', () => {
    const addNumber = createCalculator();
    expect(addNumber.reset()).toEqual(0);
});
it('should get number from memory', () => {
    const addNumber = createCalculator();
    expect(addNumber.getMemo()).toEqual(0);
});