let firstBar = document.querySelector(".pro");
let dropDown = document.querySelector(".side-bar1");
let icon1 = document.querySelector(".arrow1")
let remote = document.querySelector("#remote");
remote = true;
firstBar.addEventListener("click", show)
    
    function show(){
        if (remote==true){
            dropDown.style.visibility = "visible";
            dropDown.style.transition = ".1s step-start";
            firstBar.style.textDecoration = "Underline";
            icon1.style.transform = "rotate(180deg)";
            remote =false
        } else if (remote==false){
            dropDown.style.visibility = "hidden";
            dropDown.style.transition = ".1s step-end";
            firstBar.style.textDecoration = "none";
            icon1.style.transform = "rotate(0deg)";
            remote = true;
        }
    }