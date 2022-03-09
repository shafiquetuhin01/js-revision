const products = [
    {name:'samsung',price:12424,class:'first',countryMade:'china'},
    {name:'simphony',price:10424,class:'third',countryMade:'china'},
    {name:'iphone',price:120424,class:'first',countryMade:'usa'},
    {name:'oppo',price:22424,class:'second',countryMade:'india'},
    {name:'lenevo',price:35424,class:'third',countryMade:'uk'}
];

// map 
const brands = products.map(newItem => newItem.countryMade);
// console.log(brands);
// products.forEach(prod => console.log(prod.price));

// filter 
const search = products.filter(prod => prod.price<300000);
const search1 = products.filter(prod => prod.countryMade.includes('china'));
// console.log(search1);

// find 
const find = products.find(p=>p.name.includes('o'));
console.log(find);