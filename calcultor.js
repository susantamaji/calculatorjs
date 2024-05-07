let display=document.getElementById("inputbox");

let buttons=document.querySelectorAll("button");

let buttonarray=Array.from(buttons) ;  // this means buttons ja ja button a6a sob array ta store a6aa

let string=""

buttonarray.forEach(btn=>{
    btn.addEventListener("click",(e)=>{
        if(e.target.innerHTML=='DEL'){
            string=string.substring(0,string.length-1);
            display.value=string;
        }
        else if(e.target.innerHTML=='AC'){
            string='';
            display.value=string
        }
        else if(e.target.innerHTML=='='){
            string=eval(string);
            display.value=string;
        }
        else{
            string+=e.target.innerHTML;
            display.value=string;
        }
    })
});


