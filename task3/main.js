const display = document.getElementById("display");

function getInput(input)
{
    display.value += input;
}
function calculate()
{
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}
function meme()
{
    display.value = '';
}
