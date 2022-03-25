let clone1 = {
    ...person,
} ;

let clone2 = {
    ...clone1,
};

let samePerson = {
    ...person,
};

Object.freeze(clone1)
Object.freeze(clone2)

person.age=person.age + 1
person.country = 'FR'

samePerson=person