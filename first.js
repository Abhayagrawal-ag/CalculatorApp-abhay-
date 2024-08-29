document.querySelector("#container");
const box = document.getElementById("box");
let array=[];
let finalResult;
let number="0";
box.innerHTML=`${number}`;
const btn2=document.querySelector("#btn2")  //del
const btn3=document.querySelector("#btn3")  //%
const btn4=document.querySelector("#btn4")   //+
const btn8=document.querySelector("#btn8")   //*
const btn12=document.querySelector("#btn12")   //-
const btn16=document.querySelector("#btn16")   // "/"
const btn19=document.querySelector("#btn19")   //  =
btn4.addEventListener("click", function(){
    const plus=btn4.textContent;
    box.innerHTML=array+`${plus}`
    array=array+`${plus}`;
})
btn19.addEventListener("click",function(){   
finalResult=eval(array);
box.innerHTML=finalResult;
})
btn3.addEventListener("click", function(){
    const percentage =btn3.textContent;
    box.innerHTML=array+`${percentage}`
    array=array+`${percentage}`;
})
btn8.addEventListener("click", function(){
    const multiply=btn8.textContent;
    box.innerHTML=array+`${multiply}`
    array=array+`${multiply}`;
})
btn12.addEventListener("click", function(){
    const minus=btn12.textContent;
    box.innerHTML=array+`${minus}`
    array=array+`${minus}`;
})
btn16.addEventListener("click", function(){
    const divide=btn16.textContent;
    box.innerHTML=array+`${divide}`
    array=array+`${divide}`;
})
const container1 = document.querySelector("#container1");
const all_buttons1 = document.querySelectorAll(".class1");
all_buttons1.forEach((btn) => {
    btn.addEventListener("click", () => {
        const buttonValue = btn.textContent
        box.innerHTML = array + `${buttonValue}`;
        array=array+`${buttonValue}`;
    })
})
const AC=document.querySelector("#btn1")
AC.addEventListener("click",function(e){
    window.location.reload();
})
const container2 = document.querySelector("#container2");
const all_buttons2 = document.querySelectorAll(".class2");
all_buttons2.forEach((btn) => {
    btn.addEventListener("click", () => {
        const buttonValue = btn.textContent
        box.innerHTML = array + `${buttonValue}`;
        array=array+`${buttonValue}`;
    })
})
const container3 = document.querySelector("#container3");
const all_buttons3 = document.querySelectorAll(".class3");
all_buttons3.forEach((btn) => {
    btn.addEventListener("click", () => {
        let buttonValue = btn.textContent
        box.innerHTML = array + `${buttonValue}`;
        array=array+`${buttonValue}`;
    })
})
const container4 = document.querySelector("#container4");
const all_buttons4 = document.querySelectorAll(".class4");
all_buttons4.forEach((btn) => {
    btn.addEventListener("click", () => {
        let buttonValue = btn.textContent
        box.innerHTML = array + `${buttonValue}`;
        array=array+`${buttonValue}`;
    })
})
const container5 = document.querySelector("#container5");
const all_buttons5 = document.querySelectorAll(".class5");
all_buttons5.forEach((btn) => {
    btn.addEventListener("click", () => {
        let buttonValue = btn.textContent
        box.innerHTML = array + `${buttonValue}`;
        array=array+`${buttonValue}`;
    })
})
btn2.addEventListener("click", function(){   
    array = array.slice(0,array.length-1);
    box.innerHTML=array
})
