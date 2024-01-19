const add = (a,b) => {
    return a + b;
}

const minus = (a,b) => {
    return a - b;
}


//module.exports.add = add
module.exports = {
    add: add,
    minus: minus,
    multiply: (a,b) =>{
        return a*b
    }
}
