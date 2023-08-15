//get the values from the page
//starts or controller function
function getValues(){
    //get values from  the page
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;
    //parse into integers
    startValue= parseInt(startValue)
    endValue = parseInt(endValue)


    if(Number.isInteger(startValue) && Number.isInteger(endValue)){
         
        if(startValue > endValue){
            alert("Start Value has to be less than or equal to end value");
            return;
        }

        let numbers = generateNumbers(startValue, endValue)    
         displayNumbers(numbers)
    }
    else{
        alert("You must enter integers!")
    }


}
//generate numbers from startValue to endValue
//logic function(s)
function generateNumbers(startValue, endValue){
    let numbers = [];
    for (let i = startValue; i <= endValue; i++) {
        numbers.push(i)
    }
    return numbers;
}

//display the numbers and mark even numbers bold
//display or view functions
function displayNumbers(numbers){

    let templateRows="";
    let className=";"

    for(let i = 0; i < numbers.length; i++){
        let number = numbers[i];
        if(number % 2 == 0){
           className = "even";
        }
        else{
            className = "odd";
        }
        templateRows+= `<tr><td class="${className}">${number}</td></tr>`;
    }
    document.getElementById("results").innerHTML = templateRows;
}