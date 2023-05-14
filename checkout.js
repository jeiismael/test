var productName = "vape" // name of the product for sale
let quantity = 15 // quantity bought 
var amount = 8 // price of the product
let taxRate = 0.1 // amount of tax to be deducted 
var subTotal = quantity * amount //total amount of sold products
var taxAmount = subTotal * taxRate //total tax amount of products sold
var totalAmount = subTotal + taxAmount //total amount to be paid including tax

console.log( "Product Name: " + productName)
console.log( "Quantity: " + quantity)
console.log("Amount: $" + amount)
console.log("Tax Rate: " + taxRate * 100 + "%") // will show tax rate in percentage form
console.log("Subtotal: $" + subTotal) // calculation of sub total
console.log("Tax Amount: $" + taxAmount) //calculation of tax amount per purchase
console.log("Total Amount: $" + totalAmount) // total amount to be paid including tax
