// let amount = 23;
// if(!!!!amount){
//     console.log("This is right");
// }
// else{
//     console.log("this is wrong");
// }
// ternary
// const money = 200;
// const money1 = 40;
// const money2 = 20;
// let food = (money > 100 || money1 > 100 && money2 > 30) ? "Kacchi" : "Shobji bat";
// console.log(food);

const isAct = false;
const showUser = () => console.log("Show it");
const hideUser = () => console.log("Hide it");
// isAct ? showUser() : hideUser();
// isAct && showUser();
isAct || showUser();