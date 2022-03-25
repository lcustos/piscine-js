function first(x) {
    return x[0];
}

function last(x){
    return x[x.length-1];
}

function kiss(x){
    let y = [];
    y[1] = x[0];
    y[0] = x[x.length-1];
    return y;
}