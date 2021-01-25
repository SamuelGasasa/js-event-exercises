const button=document.getElementById('button');
button.addEventListener('click',onClick);

function onClick(){
    document.getElementById('text').remove();
}