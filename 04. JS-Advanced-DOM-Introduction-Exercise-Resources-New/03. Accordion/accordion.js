function toggle() {
    const button = document.getElementsByClassName('button');
    const extraText = document.getElementById('extra');

    if(extraText.style.display === 'none'){
        extraText.style.display = 'block';
        button[0].textContent = 'Less';
    } else {
        extraText.style.display = 'none';
        button[0].textContent = 'More';
    }
}