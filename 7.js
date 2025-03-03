function dylzhina([x1,x2,y1,y2]){
    const x1x2=Math.pow((Number(x2)-Number(x1)),2);
    const y1y2=Math.pow((Number(y2)-Number(y1)),2);
    const dylzhina=Math.sqrt(x1x2+y1y2);
    console.log({dylzhina});
}
dylzhina([2,5,4,0]);
dylzhina([5,2,0,4]);