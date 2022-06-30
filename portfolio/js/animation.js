var hamburguer = document.querySelector('.menu-hamburguer'); 
var botoes = document.querySelectorAll('button');
var icone = document.querySelectorAll('.inclina');
var cardProjetos = document.querySelectorAll('.card');
var img = document.querySelectorAll(".card-capa");
var textFocus = document.querySelectorAll('.card-text');
var desenho = document.querySelector('body');
var enviar = document.querySelector('.pushable');
var somMenuOn = document.querySelector('.som-menu-on');
var somMenuOf = document.querySelector('.som-menu-of');
var somCertificados = document.querySelector('.som-certificados');
var somProjetos = document.querySelector('.som-projetos');
var somEnviar = document.querySelector('.button-enviar');


hamburguer.addEventListener('click', () =>{
  var menuAtivo = document.querySelector('.container').classList.toggle('show-menu');
  menuAtivo;

  if(menuAtivo){
    somMenuOn.play();
    desenho.addEventListener('mousemove', sinalMouse);
  }else{
    somMenuOf.play();
    desenho.removeEventListener('mousemove', sinalMouse);
  }

})

function sinalMouse(event){
  var cursor = document.createElement('span');
  cursor.classList.add('cursor');
  desenho.appendChild(cursor);

  var x = event.clientX;
  var y = event.clientY; 
  cursor.style.top = y + (15) + 'px';
  cursor.style.left = x + (15) + 'px';

  setTimeout(() => {
       cursor.remove();
  }, 500); 
}

cardProjetos.forEach( (card) => {
  card.addEventListener('mouseenter', () =>{
       img.forEach((img) => {
        img.addEventListener('mouseenter', () =>{
         if (window.innerWidth < 660) {
           somProjetos.play();
         }
         
          img.classList.add("zoom");
          setTimeout(() => {
            img.style.display = "none";
          }, 300); 
      })
    })
  })
  card.addEventListener('mouseleave', () =>{
    img.forEach((img) => {
      img.style.display = "block";
        img.classList.remove("zoom");
   })
  })
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

// Slide de certificados
var slideIndex = 1;
slideDivs(slideIndex);

function showDivs(n) {
  somCertificados.play();
  slideDivs(slideIndex += n);
}

function slideDivs(n){
  var i;
  var x = document.querySelectorAll(".slide-certificado");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";
  x[slideIndex-1].style.opacity = "0";
  x[slideIndex-1].style.transition = ".3s ease-in";

   setTimeout(() => {
       x[slideIndex-1].style.opacity ="10";
   }, 100); 
}

enviar.addEventListener("click", (event) => {
  event.preventDefault();
  somEnviar.play();
})



 




