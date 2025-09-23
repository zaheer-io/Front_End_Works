let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");

let head;

btn1.addEventListener("click", () => {
    head = document.createElement("h1");
    head.innerHTML = "Hello world";
    document.body.appendChild(head);
});

btn2.addEventListener("click", () => {
    head.remove();
});

btn3.addEventListener("click", () =>{
    head.style.color = "blue";
});
