function heron(arr) {
    arr=arr.map(Number);
    const a=arr[0];
    const b=arr[1];
    const c=arr[2];
    const polu=(a+b+c)/2;
    const plosht=Math.sqrt(polu*(polu-a)*(polu-b)*(polu-c));
    console.log({plosht});
}
heron (['3', '4', '5']);
heron (['5', '6', '5']);
