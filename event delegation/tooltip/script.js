document.addEventListener('mouseover', mouseOn);
const va= document.getElementById('test');
va.title='hell';
va.classList.add('class');
function mouseOn(event){
    let target=event.target;
    if(event.target.tagName!=='BUTTON'){
        return ;
    }
    // let title=event.target.dataset.tooltip;
    // event.target.title=title;
    // event.target.classList.add('tooltip');
    let coords = target.getBoundingClientRect();
    alert (coords.left);
}