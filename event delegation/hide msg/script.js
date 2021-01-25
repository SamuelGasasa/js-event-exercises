// document.addEventListener('click',removeButton);

// function removeButton(event){
//     // let id=event.target.classList.item(0);
//     let elem=document.target.closest('.pane');
//     alert(elem);
//     elem.remove();
// }
const container=document.getElementById('container');
container.addEventListener('click', remove);

function remove(event){
    if(event.target.className !== 'remove-button'){
        return ;
    }
    let panel=event.target.closest('.pane');
    panel.remove();
}
