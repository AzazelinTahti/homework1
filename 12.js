function prostoiline(chislo){
let prosto=true;
if (chislo===1){
    console.log("1 ne e prosto chislo");
}
else if (chislo>1){
    for (let i=2; i<=chislo/2; i++){
        if (chislo%i==0){
            prosto=false;
            break;
        }}
    if (prosto){
        console.log(`${chislo} e prosto chislo`);
    } else {
        console.log(`${chislo} ne e prosto chislo`);
    }}
else {
    console.log("chisloto ne e prosto");
}}
prostoiline(6);
prostoiline(4);
prostoiline(7);
prostoiline(77);