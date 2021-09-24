const btns = document.querySelectorAll(".btn-1");
const md = document.querySelector(".modal");
let head = document.querySelector("h1");
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click",()=>{
        md.classList.toggle("hidden");
    });
};
head.addEventListener("click",()=>{
md.classList.toggle("hidden");
});