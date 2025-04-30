let wallet = prompt("money :");
let money = Number(wallet);

while (money >=2) {
    money = money - 2;
    console.log("Bonbon distribué : il reste " + money + " euros");
}

if (money < 2) {
    console.log("credit insuffisant : il reste " + money + " euros");
}