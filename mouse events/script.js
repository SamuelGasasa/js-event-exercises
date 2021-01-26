document.addEventListener('click',selected);
const selects=document.querySelectorAll('li');
function selected(event){
    if(event.target.tagName==='LI'){
        if(event.ctrlKey)
        {
            event.target.classList.toggle('selected');
            return ;
        }
        for(let select of selects){
            select.classList.remove('selected') ;
        }
        event.target.classList.toggle('selected');
    }
}

