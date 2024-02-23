//problem no: 32
var current_users = ["albert", "cook", "vince", "miller", "roman", "john"];
var new_users = ["JOHN", "Viller", "Richards", "shane", "Brian lara", "Ricky ponting"];
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var user = new_users_1[_i];
    if (current_users.includes(user.toLowerCase())) {
        console.log("enter a new username.");
    }
    else {
        console.log("the username is available.");
    }
}
