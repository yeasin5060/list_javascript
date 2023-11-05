let item = document.querySelector(".input");
let menu = document.querySelector(".menu")
let li = document.querySelector("li")

let itemErr = document.querySelector(".item_err");

let btn = document.querySelector(".btn");
let clear = document.querySelector(".clear");
let clears = document.querySelector(".all_clear");

let arr = [];

btn.addEventListener("click" , () =>{
    if(!item.value){
        itemErr.innerHTML = "add your list";
    }
    else{
        itemErr.innerHTML = " ";
    }
    arr.push(item.value);
    metarial()
})

let metarial = () => {
    arr.map( items =>{
        let li = document.createElement("li");
        li.textContent = items
        menu.appendChild(li)
        arr.shift()
    })
}

clear.addEventListener("click" , ()=>{
    menu.removeChild(menu.firstElementChild);
})

clears.addEventListener("click" , ()=>{
    menu.remove();
})