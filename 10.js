function cone(arr){
    const [radius, visochina] = arr;
    const obem = (Math.PI * Math.pow(radius, 2) * visochina) / 3;
    const lateral = Math.sqrt(Math.pow(radius, 2) + Math.pow(visochina, 2));
    const plosht = Math.PI * radius ** 2 + Math.PI * radius * lateral;
    console.log({obem});
    console.log({plosht});
}
cone([4, 6]);