function upper(dumi) {
    console.log(dumi.toUpperCase().match(/\w+/g).join(","));  
}
upper('Hi, how are you?')