// const student = {
//     name: 'Shafique',
//     age: 35,
//     choice: ['card', 'carom', 'cricket'],
//     child: {
//         first: 'nusair',
//         second: 'nahian',
//         third: ['niharika', 'naosara', 'neha', 'nowrin']
//     }
// };
// const stnJSON = JSON.stringify(student);
// // console.log(stnJSON);
// // console.log(student);
// const reverse = JSON.parse(stnJSON);
// // console.log(reverse);

// // fetch('url')
// // .then(res => res.json())
// // .then(data => console.log(data))

// const keys = Object.keys(student);
// const values = Object.values(student);
// console.log(keys);
// console.log(values);
const products = [
    {name:'samsung',price:12424,class:'first',countryMade:'china'},
    {name:'simphony',price:10424,class:'third',countryMade:'china'},
    {name:'iphone',price:120424,class:'first',countryMade:'usa'},
    {name:'oppo',price:22424,class:'second',countryMade:'india'},
    {name:'lenevo',price:35424,class:'third',countryMade:'uk'}
];
const remaining = products.filter(a =>a.name !=='oppo')
console.log(remaining);
// const arr = [234,254,355,355];
// arr.forEach(num=>console.log(num))
// const map = arr.map(neW=>neW*2)
// console.log(map);