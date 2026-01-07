let a = prompt("Enter first number")

let b = prompt("Enter second number")

if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("Sorryyyyy!!!")
}
let sum = parseInt(a) + parseInt(b)
// console.log("The sum is",sum)

function main() {
    let x = 1;
    try {
        console.log("The sum is", sum * x)
        return true
    } catch (error) {
        console.log("error aa gya bhaiiiii!!!");
        return false
    }
    finally {
        console.log("files are being closed and db connection is being closed")
    }
}
let c = main()