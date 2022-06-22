var desenho = document.querySelector('header');
var hamburguer = document.querySelector('.menu-hamburguer'); 
var botoes = document.querySelectorAll('button');
var icone = document.querySelectorAll('button i');
var zoomImg = document.querySelectorAll('.card-capa');
var previaImg = document.querySelectorAll('.previa-img img');
var textFocus = document.querySelectorAll('.card-text');

hamburguer.addEventListener('click', () =>{
  document.querySelector('.container').classList.toggle('show-menu');
})

zoomImg.forEach( (img) => {
  img.addEventListener('mouseover', (event) =>{
      img.classList.add("zoom");
      setTimeout(() => {
        event.target.parentNode.classList.add('visible');
      }, 200); 
  })
  img.addEventListener('mouseout', (event) =>{
    img.classList.remove("zoom");
    event.target.parentNode.classList.remove('visible');
  })  

})

desenho.addEventListener('mousemove', (event) => {
      var x = event.clientX;
      var y = event.clientY;
  
      console.log(x + ", " + y);

      var cursor = document.createElement('span');
      cursor.classList.add('cursor');
      cursor.style.top = y + (15) + 'px';
      cursor.style.left = x + (15) + 'px';
      desenho.appendChild(cursor);
   
      setTimeout(() => {
           cursor.remove();
      }, 500); 
})

botoes.forEach( (button) => { 
  button.addEventListener('mouseover', () =>{
       icone.forEach((icone) => {
       icone.classList.add("inclina-icone");
      
       button.addEventListener('mouseout', () =>{
       icone.classList.remove("inclina-icone");
      })  
    });    
  })
})

img.forEach( (previa) => { 
  img.addEventListener('mouseover', () =>{
       previa.forEach((previa) => {
       previa.style.opacity = "10";
      
       img.addEventListener('mouseout', () =>{
       previa.style.opacity = "10";
      })  
    });    
  })
})


 




