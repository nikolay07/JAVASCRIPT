import { makeCounter } from './index'

it('should get count number', () => {
    const counter1 = makeCounter();
    expect(counter1()).toEqual(0);
});
it('should get count number', () => {
    const counter2 = makeCounter();
    expect(counter2()).toEqual(0);
});