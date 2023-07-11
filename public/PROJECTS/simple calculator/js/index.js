const buttons = document.querySelectorAll('.btn');
const input = document.querySelector('#text');
let string ="";
for(let name of buttons){
    name.addEventListener('click',function(){
        if( name.textContent == "="){
             string= eval(string)
             input.value = string;
        }else if(name.textContent == "C"){
                string=""
               input.value = string;
        }else if(name.textContent == "X"){
            string = string.slice(0,string.length-1)
             input.value = string
        }else{
        string +=name.textContent;
        input.value = string;
        }
    })
}
