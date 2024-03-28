const display = document.getElementById('calc');

function ClickAppend(number){
    display.value += number;
}

function ResetDisplay(){
    display.value = "";
}

function CalculateDisplay(){
    try
    {
        display.value = eval(display.value);
    }
    catch(error)
    {
        display.value= "Error";
    }
}