var desenho = document.querySelector('body');
var hamburguer = document.querySelector('.menu-hamburguer'); 
var botoes = document.querySelectorAll('button');
var zoomImg = document.querySelectorAll('.card img');
var textFocus = document.querySelectorAll('.card-text');

hamburguer.addEventListener('click', () =>{
  document.querySelector('.container').classList.toggle('show-menu');
})

zoomImg.forEach( (img) => {
  img.addEventListener('mouseover', (event) =>{
      img.classList.add("zoom");
      setTimeout(() => {
        event.target.parentNode.classList.add('card-text-visible');
      }, 200);
         
  })
  img.addEventListener('mouseout', (event) =>{
    img.classList.remove("zoom");
    event.target.parentNode.classList.remove('card-text-visible');
  })  

})

// desenho.addEventListener('mousemove', (event) => {
//       var x = event.clientX;
//       var y = event.clientY;
  
//       console.log(x + ", " + y);

//       var cursor = document.createElement('span');
//       cursor.classList.add('cursor');
//       cursor.style.top = y + (15) + 'px';
//       cursor.style.left = x + (15) + 'px';
//       desenho.appendChild(cursor);
   
//       setTimeout(() => {
//            cursor.remove();
//       }, 500); 
// })
var icone = document.querySelector('button i');
botoes.forEach( (button) => { 
  
  button.addEventListener('mouseover', () =>{
      icone.classList.add("inclina-icone");  
  })
  button.addEventListener('mouseout', () =>{
      icone.classList.remove("inclina-icone");
  })  

})
console.log(botoes);


 




