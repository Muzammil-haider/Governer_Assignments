//problem no: 31
var usernames1 = ["admin", "john"];
var i = usernames1.length;
do {
    if (usernames1.length == 0) {
        console.log('We need to find some users!');
    }
    else if (usernames1[i] == 'admin') {
        console.log('Hello admin, would you like to see a status report?');
    }
    else {
        console.log("Hello ".concat(usernames1[i], ", thank you for logging in again."));
        --i;
    }
} while (i >= 0);
