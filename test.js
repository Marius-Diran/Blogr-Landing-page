let firstBar = document.querySelector(".pro");
let dropDown = document.querySelector(".side-bar1");
let icon1 = document.querySelector(".arrow1");
let breaker1 = document.querySelector(".breaker");
let remote1 = document.querySelector("#remote1");
remote1 = true;
firstBar.addEventListener("click", showme1);

    function showme1(){
        if (remote1==true){
            dropDown.style.visibility = "visible";
            dropDown.style.transition = ".1s ease-in";
            icon1.style.transform = "rotate(180deg)";
            breaker1.style.margin = "37vh auto 5vh";
            remote1 = false;
        } else if (remote1==false){
            dropDown.style.visibility = "hidden";
            dropDown.style.transition = ".1s ease out";
            icon1.style.transform = "rotate(0deg)";
            breaker1.style.margin = "3vh auto 5vh";
            remote1 = true;
        }
    }


let secondBar = document.querySelector(".com");
let dropDown2 = document.querySelector(".side-bar2");
let icon2 = document.querySelector(".arrow2");
let remote2 = document.querySelector("#remote2");
remote2 = true;
secondBar.addEventListener("click", showme2);

    function showme2(){
        if(remote2==true){
            dropDown2.style.visibility = "visible";
            icon2.style.transform = "rotate(180deg)";
            breaker1.style.margin = "30vh auto 5vh";
            remote2 = false;
        } else if (remote2==false){
            dropDown2.style.visibility = "hidden";
            icon2.style.transform = "rotate(0deg)";
            breaker1.style.margin = "3vh auto 5vh";
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
            if(remote3==true){
                dropDown3.style.visibility = "visible";
                icon3.style.transform = "rotate(180deg)";
                breaker1.style.margin = "25vh auto 5vh"
                remote3 = false;
            } else if (remote3==false){
                dropDown3.style.visibility = "hidden";
                icon3.style.transform = "rotate(0deg)";
                breaker1.style.margin = "3vh auto 5vh"
                remote3 = true;
            }
        }

let lastBar = document.querySelector(".buger");
let dropDown4 = document.querySelector(".nav-bar");
let header = document.querySelector(".header-writeup");
let remote4 =document.querySelector("#remote4");
remote4 = true;
lastBar.addEventListener("click", showme4);

        function showme4(){
            if(remote4==true){
                dropDown4.style.visibility = "visible";
                header.style.visibility = "hidden";
                remote4 = false;
            } else if (remote4==false){
                dropDown4.style.visibility = "hidden";
                header.style.visibility = "visible";
                remote4 = true;
            }
        }