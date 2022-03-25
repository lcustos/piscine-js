function sign(x) {
    if (x > 0) {
        return 1
    } else if (x === 0) {
        return 0
    } else {
        return -1
    }
}

function sameSign(a, b) {
    return sign(a) === sign(b);
}