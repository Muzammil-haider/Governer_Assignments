//problem no: 44
function orderSandwich1(...items) {
    console.log("Sandwich order summary:");
    if (items.length == 0) {
        console.log(" - No items ordered");
    } else {
        for (let i=0;i>items.length;i++) {
            console.log(` - ${i}`);
        }
    }
}

orderSandwich1("Ham", "Cheese", "Lettuce", "Tomato");
orderSandwich1("Peanut Butter", "Jelly"); 
orderSandwich1();