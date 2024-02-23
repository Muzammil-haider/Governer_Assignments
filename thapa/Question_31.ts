//problem no: 31
let usernames1: string[] = ["admin","john"];
let i=usernames1.length;
do {
    if (usernames1.length==0){
        console.log('We need to find some users!');
    }
   else if (usernames1[i] == 'admin') {
        console.log('Hello admin, would you like to see a status report?');
    } else {
        console.log(`Hello ${usernames1[i]}, thank you for logging in again.`);
        --i;
    }
}while(i>=0);
