
  window.addEventListener('load', function () {
    document.querySelector('.loader-wrapper').style.display ='none';
  });

  function fixNav(){
    var nav=document.querySelector("nav");
    var Scrollval = window.scrollY;
   if( Scrollval < 580){
     nav.classList.remove("fix");
   }else{
   nav.classList.add("fix");
   }

 }
 window.addEventListener("scroll",  fixNav);
 
