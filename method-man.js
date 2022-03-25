function words(x) {
    return x.split(' ')
}

function sentence(x) {
    return x.join(' ')
}

function yell(x) {
    return x.toUpperCase()
}

function whisper(x) {
    return '*' + x.toLowerCase() + '*'
}

function capitalize(x) {
    x = x.toLowerCase()
    x[0].toUpperCase()
    return x
}