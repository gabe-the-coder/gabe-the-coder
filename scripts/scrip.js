// declare global constants for the application
const ROOM_SERVICE = 50; //room servas cost
const BREAKFAST_AND_COFFEE = 40; //breakfast and coffee cost
const CHAMPAGNE_COST = 80; //champagne cost
const SALES_TAX = 0.07; //sales tax was 0.20

//geting the element id of room service, breakfast and coffee, and champagne from html
document.getElementById("room service").onclick = calcTotal;
document.getElementById("breakfast and coffee").onclick = calcTotal;
document.getElementById("champagne").onclick = calcTotal;

//a function to calculat the total of room service, breakfast and caffee, and champagne. and sales tax to them
function calcTotal(){
    //having the cost set to zero.
    let cost = 0
    
    let buyService = document.getElementById("room service").checked;
    let buyBreakfast = document.getElementById("breakfast and coffee").checked
    let buyChampagne = document.getElementById("champagne").checked
 
    cost += (buyService) ? ROOM_SERVICE : 0;
    cost += (buyBreakfast) ? BREAKFAST_AND_COFFEE : 0;
    cost += (buyChampagne) ? CHAMPAGNE_COST : 0;

    //formating the the cost
    document.getElementById("serviceTotal").innerHTML = formatCurrency(cost);

    //formating the tax
    let tax = cost * SALES_TAX;
    document.getElementById("serviceTax").innerHTML = formatCurrency(tax);

    //formatting the total cost 
    let totalCost = cost + tax;
    document.getElementById("totalBill").innerHTML = formatCurrency(totalCost);
}

// Function to display a numeric value as a text string in the format $##.## 
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }
