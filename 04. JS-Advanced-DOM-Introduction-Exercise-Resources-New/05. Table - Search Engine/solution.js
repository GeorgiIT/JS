function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   const rows = document.querySelectorAll('tbody tr');
   

   function onClick() {
      for (let row of rows){
         const input = document.querySelector('#searchField').value.toLowerCase();
         if(row.textContent.toLowerCase().includes(input)){
            row.classList.add('class','select');
         } else {
            row.removeAttribute('class');
         }
      }

   }

}