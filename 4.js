function plosht([w, h, W, H]) {
    const frst = Number(w) * Number(h);
    const scnd = Number(W) * Number(H);
    const commonArea = Math.min(Number(w), Number(W)) * Math.min(Number(h), Number(H));
    const plosht = frst + scnd - commonArea;
    console.log({plosht});
}
plosht(["2", "4", "5", "3"]);