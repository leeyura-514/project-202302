$(function(){
  /**
   * 인트로 스크린
   */
  function introMotion(){
    const introTl = gsap.timeline({
      defaults:{
        duration:1,
        delay:.2,
        ease: "expo.out",
      },
      onComplete:()=>{
        $('#intro').remove();
      }
    });
    
    introTl.from('#intro .left',{yPercent:40, opacity:0,})
    .from('#intro .right',{yPercent:50, opacity:0,})
    .to(intro,{
      opacity:0,
      scale:2,
    })
  }
  introMotion(); 


  /** 
 * 텍스트 애니메이션 슬라이드
 * */ 
  var swiper = new Swiper("#sc-text-animation .swiper", {
    loop:true,
    autoplay: {
      delay: 500,
      disableOnInteraction: false,
    },
    effect : 'fade', 
      fadeEffect: { 
      crossFade: true 
    },
    observer: true,  
    observeParents: true,
  });

  /** 
  * sc-stories 슬라이드
  * */ 
  var swiper = new Swiper("#sc-stories .swiper", {
    spaceBetween: 40,
    slidesPerGroup: 1,
    breakpoints: {
      320: {
        slidesPerView: 1.3,  //브라우저가 320보다 클 때
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 2.1,  //브라우저가 768보다 클 때
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 2,  //브라우저가 1024보다 클 때
        spaceBetween: 30,
      },
    },
  });

  /** 
  * sc-news 슬라이드
  * */ 
  var swiper = new Swiper("#sc-news .swiper", {
    slidesPerView: 3,
    spaceBetween: 40,
    breakpoints: {
      320: {
        slidesPerView: 1.3,  //브라우저가 320보다 클 때
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 3,  //브라우저가 768보다 클 때
        spaceBetween: 40,
      },
    },
  });

  /**
  * 아코디언
  */
  $('#sc-sortby .accordion').click(function(e){
    e.preventDefault();
    
    var children = $(this).children('.contents-wrap')
  
    children.slideToggle();
    $(this).toggleClass('active');
    
  })
})

// * issue : display block과 none으로 조절하나, 높이가 부드럽게 조절되진않음
// const acc = document.querySelectorAll('#sc-sortby .accordion');

// acc.forEach(function(element) {
//   element.addEventListener('click', function() {
//     if (this.classList.contains('active')) {
//       this.classList.remove('active');
//     } else {
//       this.classList.add('active');
//     }
//   });
// });
