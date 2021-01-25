const menu=document.getElementById('menu');
menu.addEventListener('click',dropMenu);
const div=document.getElementById('div');
const ul=document.getElementById('ul');
function dropMenu(){
    if(ul.style.display==='initial'){
        ul.style.display='none';
    }
    else{

        ul.style.display='initial';
    }
    menu.classList.toggle('close');
    
}