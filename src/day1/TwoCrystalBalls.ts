export default function two_crystal_balls(breaks: boolean[]): number {
    const jumpAmount = Math.floor(Math.sqrt(breaks.length));
    let i = jumpAmount;
    let answer = -1;

    // Keep going with first ball until breaks equals true
    for (; i < breaks.length; i += jumpAmount) {
        if (breaks[i]) {
            break;
        }
    }

    const brokeAt = parseInt(i.toString());
    console.log("brokeAt", brokeAt);

    // Go back to last known point that didn't break
    i -= jumpAmount;

    for (; i < brokeAt; i++) {
        if (breaks[i]) {
            answer = i;
            break;
        }
    }
    return answer;
}
