const panels=document.querySelectorAll('.pane');
// console.log(panel);
for(let panel of panels){
    const button=document.createElement('button');
    button.innerText='[x]';
    button.classList.add('remove-button');
    panel.append(button);
    button.addEventListener('click',() =>{
        panel.remove();
    });
}

