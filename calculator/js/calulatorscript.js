function displayValue(val)
{
    document.getElementById("display").value=document.getElementById("display").value+val;
}
function cleardisp(){
    document.getElementById("display").value="";
}
function dcalculate()
{
 var userinput=document.getElementById("display").value;
 var result=eval(userinput);
 document.getElementById("display").value=result;
}