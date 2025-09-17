// src/lib/combined/combined.test.ts

import { describe, it, expect } from 'vitest';
import { combinedFilter } from './combined';

describe('combined (mine ? peer)', () => {
    it('basic sequence', () => {
        const input = [1, 3, 5, 7, 9];
        // Update expected for your two filters & agreed order
        const expected = [1, 0, 2, 1, 0];
        expect(combinedFilter(input)).toEqual(expected);
    });

    it('edge cases', () => {
        expect(combinedFilter([])).toEqual([]);
        // refine expected to your two filters:
        // expect(combinedFilter([0])).toEqual([<expected>]);
    });
});
