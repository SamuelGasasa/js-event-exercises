
const img=document.getElementById('img');
div.addEventListener('click', moveBall);

function moveBall(event){
img.style.left=event.clientX +'px';
img.style.top=event.clientY+'px';
};