//problem no:3
let name1="haider";
function ToTitle_Case(str) {
  
    return str.toLowerCase().replace(/\b\w/g, s => s.toUpperCase());
  }
console.log(name1.toUpperCase());
console.log(name1.toLocaleLowerCase());
console.log(ToTitle_Case(name1));