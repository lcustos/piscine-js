let escapeStr = "\`,\\,\/,\",\'";
let arr = [4, '2'];
let obj = {
    str: "",
    num: 10,
    bool: true,
    undef: undefined,
};



let nested = {
    arr: [4, undefined, '2'],
    obj: {
        str: "",
        num: 10,
        bool: false,
    },
};
Object.freeze(escapeStr);
Object.freeze(arr);
Object.freeze(obj);
Object.freeze(obj.num);
Object.freeze(obj.bool);
Object.freeze(obj.str);
Object.freeze(obj.undef);
Object.freeze(nested);
Object.freeze(nested.arr);
Object.freeze(nested.arr);
Object.freeze(nested.obj);