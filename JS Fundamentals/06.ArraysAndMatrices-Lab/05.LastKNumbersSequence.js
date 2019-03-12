function lastKNumber(n, k) {
    let seq = [1];
    for (let i = 1; i < n; i++) {
        let start = Math.max(0, i - k);
        let end = seq.slice(start);
        let sum = end.reduce((a, b) => a + b);
        seq[i] = sum;
    }
    console.log(seq.join(' '));
}
// lastKNumber(6, 3);