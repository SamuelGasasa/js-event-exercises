const tree=document.getElementById('tree');
tree.addEventListener('click', showHide);

function showHide(event){
    if(event.target.tagName!=='LI')
    return ;
    let li=document.getRootNode()
    li.hidden=!li.hidden;
}