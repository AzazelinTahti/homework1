function smetalo([a, b, c]){
    [a, b] = [a, b].map(Number);
    const pl=function(a,b){
        return a+b;
    }
    const min=function (a,b){
        return a-b;
    }
    const umn=function(a,b){
        return a*b;
    }
    const del=function(a,b){
        return a/b;
    }
    const smetni=function(a,b,c){
        return c(a,b); 
    };
    switch (c) {
        case "+":
            return smetni(a,b,pl);
        case "-":
            return smetni(a,b,min);
        case "*":
            return smetni(a,b,umn);
        case "/":
            return smetni(a,b,del);
    }
}
console.log(smetalo(["1", "2", "+"]));
console.log(smetalo(["1", "2", "-"]));
console.log(smetalo(["1", "2", "*"]));
console.log(smetalo(["1", "2", "/"]));