function deleteByEmail() {
    const rows = document.querySelectorAll('tbody>tr>td');
    const input = document.querySelector('input').value;
    const result = document.getElementById('result')
    let deleted = false
    for(let i = 1;i <= rows.length; i += 2){
        if(rows[i].textContent == input){
            rows[i].parentElement.remove();
            result.textContent = 'Deleted';
            deleted = true;
        }  else if(deleted == false) {
            result.textContent = 'Email not found!';
        }
    }
}