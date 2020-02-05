import { calc } from './calculator'

it('should get addition', () => {
    const result = calc('8 + 2');
    expect(result).toEqual('8 + 2 = 10');
});
it('should get subtraction', () => {
    const result = calc('8 - 2');
    expect(result).toEqual('8 - 2 = 6');
});
it('should get division', () => {
    const result = calc('8 / 2');
    expect(result).toEqual('8 / 2 = 4');
});
it('should get multiplication', () => {
    const result = calc('8 * 2');
    expect(result).toEqual('8 * 2 = 16');
});

it('should get if isn`t a string', () => {
    const result = calc([]);
    expect(result).toEqual(null);
})