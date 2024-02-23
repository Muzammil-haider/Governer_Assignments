//problem no:17
let guest_name3=["Talha","Junaid","Ali","Haider"];
for (let i=0;i<guest_name3.length;i++){
    console.log("\"Hey ",guest_name3[i],"!\n",

    "\t Hope this message finds you well! We're planning a little get-together to celebrate \nthe end of summer and the start of fall. We thought it would be a great opportunity to \ncatch up and get to know each other better. There will be some light snacks and drinks,\n and feel free to bring something to share if you'd like.\n",
    
   "\n\nDate: 20/2/2024.\n Time: 8:00 to 9:00 \n Location:gulzar-e-hijri\n\n",
    
    "\tPlease let us know if you can make it. Looking forward to seeing you!\n\n",
    
    "Cheers,\n",
"\"Muzammil\"\n\n");


}
console.log("you can invite only two people for dinner.");
for(let i=guest_name3.length;i>2;i--){

   let  remove_guest=guest_name3.pop();
   console.log("sorry "+remove_guest," we can't invite you due to some reason!!!");
}
for (let i=0;i<guest_name3.length;i++){
    console.log("\"Hey ",guest_name3[i],"!\n",

    "\t Hope this message finds you well! We're planning a little get-together to celebrate \nthe end of summer and the start of fall. We thought it would be a great opportunity to \ncatch up and get to know each other better. There will be some light snacks and drinks,\n and feel free to bring something to share if you'd like.\n",
    
   "\n\nDate: 20/2/2024.\n Time: 8:00 to 9:00 \n Location:gulzar-e-hijri\n\n",
    
    "\tPlease let us know if you can make it. Looking forward to seeing you!\n\n",
    
    "Cheers,\n",
"\"Muzammil\"\n\n");


}