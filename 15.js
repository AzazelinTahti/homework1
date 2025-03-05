function nai([a, b, c]){
    [a, b, c] = [a, b, c].map(Number);
    console.log(Math.max(a, b, c));
}
nai([1, 2, 3]);
nai([20, 70, 40]);
nai([600, 700, 400]);
nai([777, 666, 444]);