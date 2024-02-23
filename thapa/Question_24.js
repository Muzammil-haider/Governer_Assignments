//problem no: 24
var list1 = [7, 2, 5, 4, 3, 6, 9, 8, 1, 0, 10, 11];
var list2 = ["Mark X", "subaru", "ford", "Audi", "Bmw", "Cadillac", "Ferrari", "Auston Martin", "Toyata", "Chevrolet"];
for (var i = 0; i < list1.length; i++) {
    if (list1[i] === 5) {
        console.log("true means found ");
    }
    else if (list1[i] < 5 && list1[i] > 2) {
        console.log("Found between 5 and 2");
    }
    else if (list1[i] == 6 || list1[i] > 6) {
        console.log("equal or greater than six");
    }
    else if (list1[i] != 3 && list1[i] < 3) {
        console.log("less than three");
    }
}
for (var i = 0; i < list2.length; i++) {
    if (list2[i].toLowerCase() === "mark x") {
        console.log("true means found");
    }
    else if (list2[i].toLowerCase() == "ford" && list2[i].toLowerCase() != "mark x") {
        console.log("condition 2(true)");
    }
    else if (list2[i].toLowerCase() == "audi" || list2[i].toLowerCase() == "ferrari") {
        console.log("condition 3(true)");
    }
}
