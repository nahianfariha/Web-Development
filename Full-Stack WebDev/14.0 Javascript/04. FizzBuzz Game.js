var output = [];
var count = 1;

function fizzbazz(){
    if(count % 3 == 0 && count % 5 ==0){
        output.push("FizzBuzz");
    }
    else if(count == 3){
        output.push("Fizz");
    }
    else if(count == 5){
        output.push("Buzz");
    }
    else{
        output.push(count);
    }

    count++;
    console.log(output);
}

/* 
for 1 to 100:
while(count<=100){}
*/