console.log("JS file added")
const region= "Canada"

if(region === "Canada"){
    console.log("You are seeing Canadian version of this site")
}

let price=20
const shippingFee=15
let cartTotal   //put let，是因为之后可以修改

if(price>= 50){
    cartTotal=price}
else{
    cartTotal=price+shippingFee
}
console.log(cartTotal) //这个是决定是否显示在js console page 里的代码

document.getElementById("cart1").innerHTML += "Your cart total is" + cartTotal



//check th value >= 100

//resining the price//
price=105
const discount=0.15

if(price>= 100){
    cartTotal =price-(price * discount)
} else if(price >=50){
    cartTotal =price
}else{
    cartTotal=price+shippingFee
}
console.log(cartTotal)

document.getElementById("cart2").innerHTML +="Your cart total is" +cartTotal


//Switch 
let planet="ff"
let message

switch(planet){
    case "Earth":
        message="Welcome to the third planet!"
        break
    case "Mars":
        message="Welcome to the red planet!"
        break
    case "Jupiter":
        message="Welcome to the largest planet!"
        break
    default:
        message= 'You are on ${planet}.we do not service ${planet} yet!'

}

console.log(message)

document.getElementById("planet").innerHTML += message


//switch EX2 with stacking cases
let answer ="c"
switch(answer){
    case "a":
    case "b":
    case "d": 
        document.getElementById("quiz").innerHTML += "Incorrect answer, please try again"
    break

    case "c":
        document.getElementById("quiz").innerHTML += "Perfect, you got it right"
}

// switch(answer){
//     case "a":
//     case "b":
//     case "d": 
//         console.log("Incorrect answer, please try again")
//     break

//     case "c":
//         console.log("Perfect,you got it right")
// }



//founctions

function myName(){
    return "Riley"
}
let firstName =myName()  //valuable let, sign a value 
// console.log(firstName)

// document.querySelector(".container h1").innerHTML += " "+ firstName

function changeBg(bgColor){
    document.querySelector("body").style.backgroundColor =bgColor
    //to test this function go to the console and type changeBg("cyan")
}