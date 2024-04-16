function search() {
   const list = document.querySelectorAll('#towns>li');
   const searchText = document.getElementById('searchText').value;
   const printedResult = document.getElementById('result');

   let result = [];
   for(const el of list){
      if((el.textContent.toLowerCase()).includes(searchText.toLowerCase())){
         el.style.fontWeight = 'bold';
         el.style.textDecoration = 'underline'
         result.push(el);
      } else{
         el.style.fontWeight = '';
         el.style.textDecoration = '';
      }
   }
   printedResult.textContent = `${result.length} matches found`;
}
