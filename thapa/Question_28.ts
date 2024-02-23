//problem no: 28
import * as promptSync from 'prompt-sync'
const prompt=promptSync();
const age = prompt('Enter your age: ');
if(age <=2){
console.log("Baby");
}
else if (2<age && age<=4){
    console.log("Toddler"); 
}
else if (4<age && age<=13){
    console.log("Kid"); 
}
else if (13<age && age<=20){
    console.log("Teenager"); 
}
else if (20<age && age<=65){
    console.log("adult"); 
}
else {
    console.log("elder"); 
}