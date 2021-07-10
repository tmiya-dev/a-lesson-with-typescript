import fib from '../src/ts/fib'

describe('fib', () => {
    it('fib(0)', () => {
        expect(fib(0)).toBe(1);
    })
    it('fib(1)', () => {
        expect(fib(1)).toBe(1);
    })
    it('fib(2)', () => {
        expect(fib(2)).toBe(2);
    })
    it('fib(3)', () => {
        expect(fib(3)).toBe(3);
    })
    it('fib(4)', () => {
        expect(fib(4)).toBe(5);
    })
    it('fib(5)', () => {
        expect(fib(5)).toBe(8);
    })
})
