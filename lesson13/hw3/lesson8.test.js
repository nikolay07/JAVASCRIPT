import { pickProps, getAdults } from './index'

it('should get properties', () => {
    const result = pickProps({ a: 1, b: 2, c: 3 }, ['a', 'c']);
    expect(result).toEqual({ a: 1, c: 3 });
});
it('should get properties another', () => {
    const result = pickProps({ a: 1, b: 2, c: 3, d: 4 }, ['a', 'd']);
    expect(result).toEqual({ a: 1, d: 4 });
});
it('should get properties if found anything', () => {
    const result = pickProps({ a: 1, b: 2, c: 3, d: 4 }, ['e', 'f']);
    expect(result).toEqual({});
});

it('should get only adults', () => {
    const result = getAdults({ Tom: 16, Bob: 19, Ann: 21 });
    expect(result).toEqual({ Bob: 19, Ann: 21, });
});
it('should get only adults another', () => {
    const result = getAdults({ Tom: 35, Bob: 16, Ann: 17 });
    expect(result).toEqual({ Tom: 35 });
});
it('should get only adults if found anything', () => {
    const result = getAdults({ Tom: 14, Bob: 16, Ann: 17, });
    expect(result).toEqual({});
});