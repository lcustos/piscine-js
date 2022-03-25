function first(x) {
    return x[0];
}

function last(x) {
    return x[x.length];
}

function kiss(x){
    let y = [];
    y = x[0] + x[-1];
    return y;
}