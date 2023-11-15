var result=document.querySelector("#result");
var keys=document.querySelectorAll(".key");
for(let i=0; i<keys.length; i++){
   keys[i].addEventListener("click",(e)=>{compute(e.target)});
}

function compute(button){
    var a = button.innerText;
    var op1=0;
    var op2=0;
    switch(a)
    {
        case "1":
           result.innerText+=a;
           break;
        case "2":
            result.innerText+=a;
           break;
        case "3":
            result.innerText+=a;
           break;
        case "4":
            result.innerText+=a;
           break;
        case "5":
            result.innerText+=a;
           break; 
        case "6":
            result.innerText+=a;
           break;
        case "7":
            result.innerText+=a;
           break;
        case "8":
            result.innerText+=a;
           break;
        case "9":
            result.innerText+=a;
           break;
        case "0":
            result.innerText+=a;
           break;
        case "=":
            op2=parseInt(result.innerText);
            console.log((op1+op2).toString());
            break
        case "+":
            op1=parseInt(result.innerText);
            result.innerText="";
            break

        case "-":
        case "*":
        case "/":
        case "AC":
            result.innerText="";
        case "(":
        case ")":
        case ".":
        case "%":
                
    } 
}