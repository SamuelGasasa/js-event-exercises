const imgs=document.querySelectorAll('img');
let bigImg=document.getElementById('largeImg');
for(let img of imgs){
    img.addEventListener('click',setMain);
}

function setMain(event){
    let target=event.target.closest('img');
    let src=target.getAttribute('src');
    bigImg.src=src;
    event.preventDefault();
}