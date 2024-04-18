function attachEventsListeners() {
    const convertButtons = document.querySelectorAll('input[type="button"]');

    convertButtons.forEach(button => {
        button.addEventListener('click', function(){
            const inputId = this.id.replace('btn' , '');
            const inputValue = parseFloat(document.getElementById(inputId).value);

            const days = inputValue / 24;
            const hours = inputValue * 24;
            const minutes = inputValue * 24 * 60;
            const seconds = inputValue * 24 * 60 * 60;

            document.getElementById('days').value = days;
            document.getElementById('hours').value = hours;
            document.getElementById('minutes').value = minutes;
            document.getElementById('seconds').value = seconds;
        })
    })
}