const add4 = '+4'
const mul2 = '*2'
let expr = "1"
let flag = false
function findExpression(x) {
    if (x === 1) {
        return expr
    } else if (x % 2 === 0) {
        expr += mul2
        findExpression(x/2)
    } else if (x - 4 >= 0) {
        expr += add4
        findExpression(x-4)
    } else {
        flag = true
    }
    if (flag === true){
        return undefined

    }else{
        return expr
    }
}

