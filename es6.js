
// array function 
const student = {
    name: 'Shafique',
    age: 35,
    choice: ['card', 'carom', 'cricket'],
    child: {
        first: 'nusair',
        second: 'nahian',
        third: ['niharika', 'naosara', 'neha', 'nowrin']
    }
};
const name = `My name is ${student.child.third[1]}`;
// console.log(name);
const arr = [23,4254,232,232,5345]
const add = () => 65;
const addSingle = x => x * 52;
const addDouble= (x,y,z) => x + y + z;
const new1 = addDouble(23,24,45);
const isEven = first => first%2==0;
const multiLine = (first, second) => {
    const sum = first + second;
    return sum;
}
// console.log(multiLine(22,44));
// console.log(isEven(52+45+87));

// spread operators 
const newNum = [...arr, 232432];

console.log(arr);
console.log(newNum);