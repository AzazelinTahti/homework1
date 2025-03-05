function chetnonechetnonevalidno(chislo){
    if (chislo%1==0){
        if (chislo%2==0){
            console.log("chetno");
        }else {
            console.log("nechetno");
        }
    }else {
        console.log("nevalidno");
    }
}
chetnonechetnonevalidno(2);
chetnonechetnonevalidno(3);
chetnonechetnonevalidno(4.4);