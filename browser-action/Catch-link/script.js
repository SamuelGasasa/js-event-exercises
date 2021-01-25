const links=document.querySelectorAll('a');
for(let link of links){
    link.addEventListener('click', cancel);
}
function cancel(event){
    let target = event.target.closest('a');
    href=target.getAttribute('href');
    let isLeaving = confirm(`Leave for ${href}?`);
    if (!isLeaving){
        event.preventDefault();
    } 
}


