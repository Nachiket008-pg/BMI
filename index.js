console.log("Hello")

function com(){
    height = document.getElementById("myHeight").value;
    height = height/100;
    new_ht = height * height;
    weight = document.getElementById("myWeight").value;
    bmi = weight / new_ht ;
    bmi = parseFloat(bmi).toFixed(2);
    document.getElementById("ot").innerText = ("Your BMI is : ");
    document.getElementById("output").innerHTML = (bmi);

    // if (bmi < 18.5 ){
    //     document.getElementById("health").innerText =("Sorry but you're under weight.");
    // }else if ( bmi > 18.5 || bmi < 24.9 ){
    //     document.getElementById("health").innerText =("Congrats. Your weight is normal.");
    // } 
}