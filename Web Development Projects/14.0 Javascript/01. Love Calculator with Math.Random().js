prompt("Enter your name:");
prompt("Enter your crush's name:");

var lovescore = Math.random() * 100;
lovescore = Math.floor(lovescore) + 1;

if(lovescore > 70){
    alert("Your lovescore is " + lovescore + ". You love each other like Kanye loves Kanye.");
}
if(lovescore > 30 && lovescore < 70){
    alert("Your lovescore is " + lovescore + ".");
}
else{
    alert("Your lovescore is " + lovescore + ". You go together like oil and water");
}