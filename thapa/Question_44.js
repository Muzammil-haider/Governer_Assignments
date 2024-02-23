//problem no: 44
function orderSandwich1() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwich order summary:");
    if (items.length == 0) {
        console.log(" - No items ordered");
    }
    else {
        for (var i = 0; i > items.length; i++) {
            console.log(" - ".concat(i));
        }
    }
}
orderSandwich1("Ham", "Cheese", "Lettuce", "Tomato");
orderSandwich1("Peanut Butter", "Jelly");
orderSandwich1();
