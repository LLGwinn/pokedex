/** Randomly divide array of cards into two 'hands'. */

function dealHands(array) {
    let hands = { hand1:[], hand2:[] };

    for (let num of array) {
        const handNum = Math.floor(Math.random() * 2 + 1);

        if (handNum === 1) {
            hands.hand1.length < 4 ? hands.hand1.push(num) : hands.hand2.push(num);
        } else {
            hands.hand2.length < 4 ? hands.hand2.push(num) : hands.hand1.push(num);
        }
    }
    return hands;
}
/** Calculate score for a hand of cards */

function calculateScore(array) {
    const total = array.reduce( (acc, i) => {
        return acc + i;
    }, 0)

    return total;
}

export {dealHands, calculateScore};