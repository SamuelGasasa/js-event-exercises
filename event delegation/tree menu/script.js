const tree=document.getElementById('tree');
tree.addEventListener('click', showHide);

function showHide(event){
    if(event.target.tagName!=='SPAN'){
        return;
    }
    let hid=event.target.parentNode;
    let hid2= hid.childNodes[2];
    hid2.hidden=!hid2.hidden;
}