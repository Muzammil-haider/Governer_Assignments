//problem:19 
let moreGuest = ["haider", "ali", "zaidi"];
moreGuest[2] = "NewPerson";
moreGuest.unshift("NewGuest1");
moreGuest[4] = "NewGuest2";
moreGuest.push("NewGuest3");

console.log(`Totall Guests are invited ${moreGuest.length}`);
