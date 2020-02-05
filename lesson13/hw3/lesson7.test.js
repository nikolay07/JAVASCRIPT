import { squareArray, reverseArray } from './index'

it('should get square array if passed a string', () => {
    const result = squareArray('string');
    expect(result).toEqual(null);
});
it('should get square array from 2, 4, 8', () => {
    const result = squareArray([2, 4, 8]);
    expect(result).toEqual([4, 16, 64]);
});
it('should get square array from 1, 3, 9', () => {
    const result = squareArray(1, 3, 9);
    expect(result).toEqual(null);
});

it('should get reverse array ', () => {
    const result = reverseArray([1, 2, 3]);
    expect(result).toEqual([3, 2, 1]);
});
it('should get reverse array ', () => {
    const result = reverseArray(['string', 2, 3]);
    expect(result).toEqual([3, 2, 'string']);
});
it('should get reverse array if is not array', () => {
    const result = reverseArray(1, 2, 3);
    expect(result).toEqual(null);
});
[]