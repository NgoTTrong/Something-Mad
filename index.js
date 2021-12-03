const yesButton = document.querySelector('.yes_button');
const noButton = document.querySelector('.no_button');
const overLay = document.querySelectorAll('.overlay_text');
const container = document.querySelector('.question_container');
const agreeButton = document.querySelector('.agree_button');
const rejectButton = document.querySelector('.reject_button');
console.log(overLay)
yesButton.addEventListener('click',()=>{
    overLay[0].classList.add('visible');
})
let width = 80;
let height = 80;
rejectButton.addEventListener('click',()=>{
    let xIndex;
    let yIndex;
    xIndex = Math.floor(Math.random()*width);
    yIndex = Math.floor(Math.random()*height);
    while (xIndex < 30 && xIndex > 20){
        xIndex = Math.floor(Math.random()*width);
    }
    rejectButton.style.top = yIndex + "%";
    rejectButton.style.left = xIndex + "%";
})

agreeButton.addEventListener('click',()=>{
    overLay[1].classList.add('visible');
})
noButton.addEventListener('click',()=>{
    overLay[2].classList.add('visible');
})
