function razstoianie(arr){
    const v1 = arr[0]*(1000/3600); 
    const v2 = arr[1]*(1000/3600);
    const t = arr[2];
    const frst = v1*t; 
    const scnd = v2*t; 
    const razstoianieto = Math.abs(frst-scnd); 
    console.log({razstoianieto});
}
razstoianie([40, 20, 4000]);
razstoianie([20, 40, 2000]);