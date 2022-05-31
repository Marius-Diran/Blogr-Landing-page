let firstBar = document.querySelector(".pro");
let dropDown = document.querySelector(".side-bar1");
let remote = document.querySelector("#remote");
remote = true;
firstBar.addEventListener("click", show)
    
    function show(){
        if (remote==true){
            dropDown.style.visibility = "visible";
            firstBar.style.transform = "rotate(180deg)";
            firstBar.style.padding = "0 0 0 0.4rem";
            firstBar.style.transition = ".1s ease-in"
            remote =false
        } else if (remote==false){
            dropDown.style.visibility = "hidden";
            firstBar.style.transform = "rotate(0deg)";
            firstBar.style.padding = "0 0 0 -0.4rem";
            firstBar.style.transition = ".1s ease-out";
            remote = true;
        }
    }