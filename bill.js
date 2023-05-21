
const getTotalBill = (numOfCoffees, costOfEachCoffeee) => {
    let totalBill = numOfCoffees.reduce((a,b) => a + (b*costOfEachCoffeee), 0);
    return `The total bill is $${totalBill}`;
}

const numOfCoffees = [1, 3, 2, 1, 5, 6];
const costOfEachCoffeee = 1.25;

console.log(getTotalBill(numOfCoffees, costOfEachCoffeee));