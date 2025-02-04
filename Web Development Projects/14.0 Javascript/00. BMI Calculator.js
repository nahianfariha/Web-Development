/*Create a BMI calculator using JavaScript functions. 
You do not need to write any alerts or prompts or console logs. Your code should only contain the function, 
the result has to be returned by the function. You do not need to call the function.
*/
function bmiCalculator(weight, height) 
{
    var bmi = weight/Math.pow(height, 2);  //Math.pow(Base, Exponent)= height^2 or height*height
    
    return Math.round(bmi);  //for rounding it to the nearest integer
}



/* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:

var bmi = bmiCalculator(65, 1.8); 

bmi should equal 20 when it's rounded to the nearest whole number.

*/
