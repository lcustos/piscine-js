function first(x) {
    return x[0];
}

function last(x){
    return x[x.length-1];
}

function kiss(x){
    let y = [];
    y[0] = x[0];
    y[1] = x[x.length-1];
    return y;
}