let text = document.querySelector("input");
let btn = document.querySelector("button");
let form = document.querySelector("form");


form.addEventListener('submit',function(e)

{   
    e.preventDefault();
    let divison = document.createElement("div"); 
    divison.classList.add("styling");
    
    let button = document.createElement("INPUT");
    button.setAttribute("type","checkbox");
    divison.append(button);
    
    let listitem = document.createElement("li");
    listitem.innerText = text.value;
    listitem.classList.add("alignment");
    divison.append(listitem);
    
    let crossbtn = document.createElement("span");
    crossbtn.innerText = "x";
    crossbtn.setAttribute("style","cursor: pointer");
    crossbtn.addEventListener('click', function(){
        divison.remove();
    });
    divison.append(crossbtn);

    button.addEventListener('click',function()
{
   listitem.classList.toggle("line");
})
//   listitem.setAttribute("style","align-self: flex-start");

    
    
    form.append(divison);
    form.reset();


})