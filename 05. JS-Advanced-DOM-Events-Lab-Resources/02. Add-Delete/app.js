function addItem() {
    const input = document.getElementById('newItemText');
    const liElement = createElement('li', input.value);

    const deleteBtn = createElement('a', '[DELETE]')
    deleteBtn.href = "#";
    liElement.appendChild(deleteBtn);

    deleteBtn.addEventListener('click', (ev) => {
         ev.target.parentNode.remove();
    })

    document.getElementById('items').appendChild(liElement);
    input.value = '';

    function createElement(type, content){
        const element = document.createElement(type);
        element.textContent = content; 
        return element; 
    }
}
