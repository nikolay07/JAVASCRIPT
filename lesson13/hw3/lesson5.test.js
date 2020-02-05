import { getSum, increaser, compareSums, findDivCount } from './index'

it('should get sum of multiples of 2', () => {
    const result = getSum(1, 9);
    expect(result).toEqual(20);
});
it('should get sum if missing second elem', () => {
    const result = getSum(10);
    expect(result).toEqual(0);
});
it('should get if second elem is greater than the first', () => {
    const result = getSum(10, 2);
    expect(result).toEqual(0);
});


it('should get increase the first elem to the second', () => {
    const result = increaser(10, 5);
    expect(result).toEqual(15);
});
it('should get increase the first elem if the second elem is greater', () => {
    const result = increaser(10, 15);
    expect(result).toEqual(10);
});
it('should get increase the first elem if the second elem is a string', () => {
    const result = increaser('string', 15);
    expect(result).toEqual('string');
});


it('should get comparison if the first amount is greater', () => {
    const result = compareSums(2, 5, 7, 9);
    expect(result).toEqual(false);
});
it('should get comparison if the second amount is greater', () => {
    const result = compareSums(2, 15, 7, 9);
    expect(result).toEqual(true);
});
it('should get comparison if the first amount is a string', () => {
    const result = compareSums('2', 1, 7, 9);
    expect(result).toEqual(true);
});

it('should get number of multiples of 2', () => {
    const result = findDivCount(1, 20, 2);
    expect(result).toEqual(10);
});
it('should get number of multiples of 3', () => {
    const result = findDivCount(1, 20, 3);
    expect(result).toEqual(6);
});
it('should get number of multiples of 4', () => {
    const result = findDivCount(1, 20, 4);
    expect(result).toEqual(5);
});