function visokosna(year) {
    const frst=year%4==0 && year%100!=0;
    const scnd=year%400==0;
    if (frst || scnd) {
        console.log('Yes');
        return;
    } 
    console.log('No');
    }
    visokosna(1984);
    visokosna(2000);
    visokosna(1600);
    visokosna(1900);
