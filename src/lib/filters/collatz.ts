export function collatz(n: number): number {
    if (n % 2 == 0)//checks if even
    {
        n = n / 2;
    }
    else//if not even, has to be odd
    {
        n = (n * 3) + 1;
    }
    return n;
}

export function collatzs(ns: number[]): number[] {
    return ns.map(collatz);
}