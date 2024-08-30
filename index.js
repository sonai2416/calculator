const os=document.getElementById('os')

function Clear()
{
    os.value=""
}

function del()
{
    os.value=os.value.slice(0,-1)
}


function display(txt)

{

os.value=os.value+txt;

console.log(os.value)

}

function calculate()
 {
     os.value=eval(os.value);
 
} 
function cube()
{
    os.value=eval(os.value* os.value* os.value);
    
    
}

function square()
{
    os.value=eval(os.value* os.value);
    
    
}
function squareroot()
{
  
    os.value=Math.sqrt ( eval(os.value));


}
function diagonal()
{

    os.value=eval(os.value)*Math.sqrt(2);
}