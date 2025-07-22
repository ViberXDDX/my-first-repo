// المعطيات
var symbol ="*";
var space = " ";

// أول شكل

for(var i = 1; i <= 5 ; i++){
    var symbols = symbol.repeat(2*i - 1);
    var spaces = space.repeat(5- i);
    console.log(spaces + symbols);
}

for(var i = 4; i >= 1 ; i--){
    var symbols = symbol.repeat(2 * i - 1);
    var spaces = space.repeat ( 5 -i );
    console.log(spaces + symbols)
}

console.log("--------------------------------")

// تاني شكل

for(var i = 1; i <=5; i++){
        symbols = symbol
        spaces = space.repeat(5+2);
        final = symbols + spaces + symbols;
    if(i == 1 || i == 5 ){
    var symbols = symbol.repeat(5+4);
    var spaces = "";
    var final = symbols+ spaces;
    }


    console.log("  "+final);
}

console.log("--------------------------------")

// تالت شكل

for(var i = 1; i <= 5; i++ ){
    var spacesOuter = space.repeat(5-i);
    var final = space.repeat(5-1) +"*";
    if(i != 1){
    var spacesInter = space.repeat( 2*(i-1) -1);
    var final = spacesOuter + symbol +spacesInter +symbol ;
    }
    console.log(final);
}

for (var i = 4; i >= 1; i--) {
    var spacesOuter = space.repeat(5 - i);
    var final = "";

    if (i === 1) {
        final = space.repeat(5 - 1) + "*";
    } else {
        var spacesInter = space.repeat(2 * (i - 1) - 1);
        final = spacesOuter + symbol + spacesInter + symbol;
    }

    console.log(final);
}

console.log("--------------------------------")

// function find prime number

function primeNumber(num){
    var counter = 0;
    for( var i = 1; i < num; i++){
        if(num % i == 0){
            counter ++;
        }
    }
    if(counter >= 2){
        console.log("Number is not prime!")
    }
    else console.log("Number is prime <3")
}

primeNumber(9);
primeNumber(11);

console.log("--------------------------------")

// تعريف شخصي

var resume ={
    name : "Youssef",
    age : 21,
    job : "AI trainer",
    college : "Science",
    major : " CS & mathmatics"
}

console.log (resume);
