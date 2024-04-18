function create(words) {
   //div -> p -> string
   const content = document.getElementById('content');

   for(let i = 0; i < words.length; i++){
      const div = document.createElement('div');
      const p = document.createElement('p');
      p.textContent = words[i];
      p.style.display = 'none';


      div.appendChild(p);
      content.appendChild(div);
   }
   content.addEventListener('click', function(event){
      if(event.target.tagName === 'DIV' || event.target.tagName === 'P'){
         const para = event.target.children[0] || event.target;

         // When we click on the element it will become visible and 
         // when we click again it will disappear
         const isVisible = para.style.display === 'block';
         para.style.display = isVisible ? 'none' : 'block';
      }
   })
}