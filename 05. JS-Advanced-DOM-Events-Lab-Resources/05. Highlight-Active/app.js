function focused() {
    Array.from(document.querySelectorAll('input')).forEach(i => {
        i.addEventListener('focus', onFocus);
        i.addEventListener('blur', onBlur);
    });

    function onFocus(event){
        event.target.parentNode.classList.add('focused'); // trying different methods for adding className
    }

    function onBlur(event){
        event.target.parentNode.className = '';
    }
}