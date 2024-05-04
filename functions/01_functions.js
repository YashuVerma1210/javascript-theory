function sum(a,b){ // param
    console.log(a+b);
}

sum(1,2) // arguments

function cartSum(...itemPrices){
    return itemPrices
}

console.log(cartSum(100,200,300,400,500));