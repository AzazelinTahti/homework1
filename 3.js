function sreshtaniia([string, letter]) {
    let sreshtaniia=0;
    for (const char of string) {
        if (char == letter) {
            sreshtaniia++;
        }
    }
    console.log({sreshtaniia});
}
sreshtaniia(["hello", "l"]);
sreshtaniia(["kokoshka", "o"])