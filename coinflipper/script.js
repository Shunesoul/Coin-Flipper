
let coinside = ''
const side1 = 'Heads'
const side2 = 'Tails'
function coinflip() {
    const number = (Math.random()*2);
if (number < 1) {
    return side1;
}   else if (number > 1) {
    return side2;
}
}

//window.alert(coinflip())