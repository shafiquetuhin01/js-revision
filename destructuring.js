const destructure = {
    name: 'shafique',
    trade: 'sec asst (a)',
    bd: 466204,
    address: {
        present: {
            area: 'soudi',
            qtr: '301/ga',
        },
        location: 'dhaka',
        parmanent: {
            vill: 'kharera',
            post: 'kharera',
            upozila: 'kasba',
            dist: 'b.baria'
        }
        
    }
};
// const newLoc = destructure.address.present.area;

const {name, trade} = destructure;
const {area} = destructure?.address?.present;
console.log(area);


// const number = [50,60];
// // const a = number[0];
// // const b = number[1];
// const [a,b] = number;
// console.log(a,b);
/* function box(num1,num2){
    const num = [num1, num2];
    return num;
}
const result = box(22,44);
// console.log(result);

const {name, age} = {name: 'Shafique', age:36};
console.log(age);
const [tumi, ami, she] = ['Shafique','Tuhin','nusair']
console.log(tumi,ami,she);
 */










