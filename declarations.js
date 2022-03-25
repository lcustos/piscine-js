const escapeStr = "\`,\\,\/,\",\'";
const arr = [4, '2'];
const obj = {
    str: "",
    num: 10,
    bool: true,
    undef: undefined,
};



const nested = {
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