let clone1 = {
    ...person,
};

let clone2 = {
    ...person,
};

let samePerson = {
    ...person,
};

Object.freeze(clone1);
Object.freeze(clone2);

