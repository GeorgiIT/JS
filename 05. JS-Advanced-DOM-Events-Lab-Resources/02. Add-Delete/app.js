function addItem() {
    const liElement = document.createElement('li');
    liElement.textContent = document.getElementById('newItemText').value;

    document.getElementById('items').appendChild(liElement);
    document.getElementById('newItemText').value = '';
}
// to do with event listener
function removeItem(){
    const liElement = document.getElementById('li-to-del');
    liElement.parentNode.removeChild(liElement);
}