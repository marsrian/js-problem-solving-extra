/**-------Topics: && and ||----------*/

const job = "yes";
const salary = 30000;

if(job === "yes"  && salary > 50000){
    console.log("You can buy gaming PC 😎")
}
else if(job === "yes" || salary > 50000){
    console.log("You can buy Laptop")
}
else{
    console.log("Muri ka 🍿")
}
