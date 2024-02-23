//problem no: 21
var countries1 = /** @class */ (function () {
    function countries1(a, b, c) {
        this.currency = a;
        this.famous = b;
        this.language = c;
    }
    return countries1;
}());
var c1 = new countries1("rupees", "tajmahal", "hindu");
console.log(c1.currency);
console.log(c1.famous);
console.log(c1.language);
