//problem no:15
let guest_name1=["Talha","Junaid","Ali","Haider"];
for (let i=0;i<guest_name1.length;i++){
    console.log("\"Hey ",guest_name1[i],"!\n",

    "\t Hope this message finds you well! We're planning a little get-together to celebrate \nthe end of summer and the start of fall. We thought it would be a great opportunity to \ncatch up and get to know each other better. There will be some light snacks and drinks,\n and feel free to bring something to share if you'd like.\n",
    
   "\n\nDate: 20/2/2024.\n Time: 8:00 to 9:00 \n Location:gulzar-e-hijri\n\n",
    
    "\tPlease let us know if you can make it. Looking forward to seeing you!\n\n",
    
    "Cheers,\n",
"\"Muzammil\"\n\n");


}
console.log(`the person who can't make it ${guest_name1[2]}`);
guest_name1.splice(2,1);
guest_name1.splice(2,0,"zaid");

for (let i=0;i<guest_name1.length;i++){
    console.log("\"Hey ",guest_name1[i],"!\n",

    "\t Hope this message finds you well! We're planning a little get-together to celebrate \nthe end of summer and the start of fall. We thought it would be a great opportunity to \ncatch up and get to know each other better. There will be some light snacks and drinks,\n and feel free to bring something to share if you'd like.\n",
    
   "\n\nDate: 20/2/2024.\n Time: 8:00 to 9:00 \n Location:gulzar-e-hijri\n\n",
    
    "\tPlease let us know if you can make it. Looking forward to seeing you!\n\n",
    
    "Cheers,\n",
"\"Muzammil\"\n\n");


}