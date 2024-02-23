//problem no: 32
let current_users=["albert","cook","vince","miller","roman","john"]
let new_users=["JOHN","Viller","Richards","shane","Brian lara","Ricky ponting"]

for(const user of new_users){
    if(current_users.includes(user.toLowerCase())){
        console.log("enter a new username.");
    }
    else{
        console.log("the username is available.");
    }
}