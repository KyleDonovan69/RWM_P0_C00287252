// src/lib/combined/combined.ts

import { collatzs as myCollatz } from '$lib/filters/collatz';

// Prefer importing from the peer package root (they should export from index.ts)

import { persistence as peerPersistence } from 'peer-filter-c00285423/src/lib/filters';

export function combinedFilter(xs: number[]): number[] {
    const afterMine = myCollatz(xs);
    return peerPersistence(afterMine);
}
