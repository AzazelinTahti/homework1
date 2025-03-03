function sumaddstotal(arr){
    let suma=0;
    for(const ceni of arr){
        suma += Number(ceni);
    }
    console.log({suma});
    const dds=suma*0.2;
    console.log({dds});
    const total=suma+dds;
    console.log({total});
}
sumaddstotal(["4.40", "6.60", "7.70"]);