let firstBar = document.querySelector(".pro");
let dropDown = document.querySelector(".side-bar1");
let icon1 = document.querySelector(".arrow1")
let remote = document.querySelector("#remote");
remote = true;
firstBar.addEventListener("click", showme1)
    
    function showme1(){
        if (remote==true){
            dropDown.style.visibility = "visible";
            dropDown.style.transition = ".1s ease-in";
            firstBar.style.textDecoration = "Underline";
            icon1.style.transform = "rotate(180deg)";
            remote =false
        } else if (remote==false){
            dropDown.style.visibility = "hidden";
            dropDown.style.transition = ".1s ease out";
            firstBar.style.textDecoration = "none";
            icon1.style.transform = "rotate(0deg)";
            remote = true;
        }
    }


let secondBar = document.querySelector(".com");
let dropDown2 = document.querySelector(".side-bar2");
let icon2 = document.querySelector(".arrow2")
let remote2 = document.querySelector("#remote2");
remote2 = true;
secondBar.addEventListener("click", showme2)

    function showme2(){
        if (remote2==true){
            dropDown2.style.visibility = "visible";
            dropDown2.style.transition = ".1s ease-in";
            secondBar.style.textDecoration = "underline";
            icon2.style.transform = "rotate(180deg)";
            remote2 = false
        } else if (remote2==false){
            dropDown2.style.visibility = "hidden";
            dropDown2.style.transition = ".1s ease out";
            secondBar.style.textDecoration = "none";
            icon2.style.transform = "rotate(0deg)";
            remote2 = true;
        }
    }

let thirdBar = document.querySelector(".con");
let dropDown3 = document.querySelector(".side-bar3");
let icon3 = document.querySelector(".arrow3");
let remote3 = document.querySelector("#remote3");
remote3 = true;
thirdBar.addEventListener("click", showme3);

    function showme3(){
        if (remote3==true){
            dropDown3.style.visibility = "visible";
            dropDown3.style.transition = ".1s ease-in"
            thirdBar.style.textDecoration = "underline"
            icon3.style.transform = "rotate(180deg)"
            remote3 = false;
        } else if (remote3==false){
            dropDown3.style.visibility = "hidden";
            dropDown3.style.transition = ".1s ease-out"
            thirdBar.style.textDecoration = "none"
            icon3.style.transform = "rotate(0deg)"
            remote3 = true;
        }
    }