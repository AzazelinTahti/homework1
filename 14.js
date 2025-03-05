function prisvoi(arr){
    const obekt = {};
    obekt[arr[0]] = arr[1];
    obekt[arr[2]] = arr[3];
    obekt[arr[4]] = arr[5];
    console.log(obekt);
}
prisvoi(['name', 'Pesho', 'age', 23, 'gender', 'male']);