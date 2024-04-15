function colorize() {
    let data = document.querySelectorAll('table tr');

    for (let i = 1; i< data.length; i += 2){
        data[i].style.backgroundColor = 'teal';
    }
}