var TrandingSlider = new Swiper('.tranding-slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false
    },
    slidesPerView: '3',
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2.5,
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });
  {/* <i class="fa-solid fa-xmark"></i> */}
  
  $(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 10) {
          $(".navbar").css("background" , "black");
        }
  
        else{
            $(".navbar").css("background" , "");  	
        }
    })
  })
   
  let menu = document.querySelector('#menu-icon')
  let navbar = document.querySelector('.nav-links')
  
  menu.onclick = ()=>{
    menu.classList.toggle('fa-xmark')
    navbar.classList.toggle('open')
  }