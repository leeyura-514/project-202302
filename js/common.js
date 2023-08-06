$(function() {
  // 검색창 - open & close
  $('.btn.search').click( ()=> {
    $('#header').toggleClass('on')
    $('body').addClass('on');
  })

  // dimm 영역, 닫기버튼 - close
  $('#header .mask, #header .btn.close').click( ()=> {
    $('#header').removeClass('on');
    $('body').removeClass('on');
  })

  // 메뉴 - open & close
  const btnMenu = $('.header-content.small-view .btn.menu')
  const btnClose = $('.header-content.small-view .btn.close')
  btnMenu.click(()=>{
    $('#header').addClass('active')
  })
  btnClose.click(()=>{
    $('#header').removeClass('active')
  })
  
  // 언어선택 - hover 
  $('.header-content.large-view .btn.lang, .header-content.large-view .lang-area').hover(function(){
    $('.header-content.large-view .lang-area').css('display', 'block')
  }, function(){
    $('.header-content.large-view .lang-area').css('display', 'none')
  })
})

// 반응형 대비 js
const isMobile = window.matchMedia("only screen and (max-width: 820px)").matches;
if (isMobile) {
  // mobile only code
  window.addEventListener('load', function(){
    const acc = document.querySelector('#sc-sortby .accordion')
    acc.classList.remove('active')
  });
}










