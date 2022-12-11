let result=document.getElementById("input");

function display(num){
    result.value=result.value+num;
}
function calculate(){
    result.value=eval(result.value);
}
function Clear(){
    result.value=" ";
}
function Previous(){
    result.value=result.value.slice(0,-1)
}