import { describe, it, expect } from 'vitest'
import { collatzs } from './collatz'

describe('Collatz filter', () => {
    it('collatzs a sequence', () => {
        const input = [4,2,8,3,9,4,10];
        const expected = [2,1,4,10,28,2,5];
        expect(collatzs(input)).toEqual(expected);
    });
});