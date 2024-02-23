//problem no:3
var name1 = "haider";
function ToTitle_Case(str) {
    return str.toLowerCase().replace(/\b\w/g, function (s) { return s.toUpperCase(); });
}
console.log(name1.toUpperCase());
console.log(name1.toLocaleLowerCase());
console.log(ToTitle_Case(name1));
