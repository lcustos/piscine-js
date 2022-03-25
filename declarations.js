let escapeStr = "\',\\,\/,\",\'";
let arr = [4, '2'];
let obj = {
    str: "",
    num: 10,
    bool: true,
    undef: undefined
};
Object.freeze(arr);
Object.freeze(obj);


let nested = {
    arr : [4, undef, '2'],
    obj : {
        str : "",
        num : 10,
        bool : false,
    },
};

Object.freeze(nested);