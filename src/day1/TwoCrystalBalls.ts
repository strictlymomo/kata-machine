export default function two_crystal_balls(breaks: boolean[]): number {
    const jumpAmount = Math.floor(Math.sqrt(breaks.length));
    let i = jumpAmount;
    let answer = -1;

    // Keep jumping intervals of sqrt n with first ball until it breaks
    for (; i < breaks.length; i += jumpAmount) {
        if (breaks[i]) {
            break;
        }
    }

    const brokeAt = parseInt(i.toString());
    console.log("brokeAt", brokeAt);

    // Go back to last known point that didn't break
    i -= jumpAmount;

    // Walk one-by-one until you find where it exactly breaks
    for (; i < brokeAt; i++) {
        if (breaks[i]) {
            answer = i;
            break;
        }
    }
    return answer;
}
