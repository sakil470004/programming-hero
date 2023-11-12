/* function add(first, second){
    console.log(first, second);
    // second = second || 0;
    // if(second === undefined){
    //     second = 0;
    // }
    const total = first + second;
    return total;
} */


function add(first, second = 0) {
    const total = first + second;
    return total;
}

const result = add(10);
console.log(result);

function fullName(first, last = 'Chowdhury') {
    const name = first + ' ' + last;
    return name;
}

const name = fullName('Gelam');
console.log(name);

function add500(first = 0, second = 0) {
    return first + second;
}
console.log(add500(10,5))