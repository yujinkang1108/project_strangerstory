//헤더
/**
 * .header .link-nav
 */
const viewTxt1 = new SplitType('.header .group-right .link-nav span.front', { types: 'words, chars', });
const viewTxt2 = new SplitType('.header .group-right .link-nav span.back', { types: 'words, chars', });

viewMotion = gsap.timeline({
  paused:true,
})
viewMotion
.addLabel('a')
.to(viewTxt1.chars,{
  yPercent:-100,
  stagger:0.02,
},'a')
.to(viewTxt2.chars,{
  yPercent:-100,
  stagger:0.02,
},'a')

$('.header .group-right').hover(function(){
  viewMotion.play();
},function(){
  viewMotion.reverse();
})




//메인

/**
 * sc-main .group-headline
 */
$(function(){

  const introTxt = new SplitType('.sc-main .group-headline span',{ types: 'words, chars', });
  gsap.from(introTxt.chars,{
    delay:0.5,
    opacity:0,
    stagger:0.05,
    yPercent:100
  })
/**
 * sc-main mainbg
 */
  gsap.from('.sc-main .img-box img',{
    scrollTrigger:{
      trigger:'.sc-main',
      start:"-80% 0%",
      end:"100% 0%",
      scrub:1,
    },
    opacity:0,
    yPercent:15
  })
  
/**
* .sc-story .group-text
*/
gsap.from('.sc-story .headline-area .headline',{
  scrollTrigger:{
    trigger:'.sc-story .group-text',
    start:"20% 100%",
    end:"100% 0%",
    scrub:2,
    // markers:true,
  },
  opacity:0,
  xPercent:30
})

/**
* .sc-story .bubble
*/
gsap.to('.bubble.img1',{
  scrollTrigger:{
    trigger:".sc-story .sc-inner.page-inner",
    start:"0% 50%",
    end:"100% 0%",
    scrub:2,
},
'top': '-80%'
})
gsap.to('.bubble.img2',{
  scrollTrigger:{
    trigger:".sc-story .sc-inner.page-inner",
    start:"0% 50%",
    end:"100% 0%",
    scrub:2,
},
'top': '80%'
})

/**
 * .sc-story .sticker-list
 */
  slideList = document.querySelectorAll('.sc-story .sticker-list');

  slideList.forEach(element => {
    gsap.to(element,{
      scrollTrigger:{
        trigger:element,
        start:"0% 100%",
        end:"100% 0%",
        scrub:1,
      },
      xPercent:element.dataset.x
    })
  });

  gsap.set('.sc-story .sticker-item img',{
    opacity:0,
    borderRadius:0
  })
  gsap.to('.sc-story .sticker-item img',{
    scrollTrigger:{
      trigger:'.sc-story',
      start:"0% 0%",
      end:"100% 0%",
    },
    stagger:0.1,
    opacity:1,
    borderRadius:30
  })
    



/**
   * sc-content
   * circle-area
   */
gsap.to('.circle',{
  scrollTrigger:{
    trigger:".sc-content .group-title",
    start:"0% 50%",
    end:"100% 0%",
    scrub:2,
},
'transform': 'rotate(-45deg)'
})

/**
   * sc-content
   * box-item
   */
$('.sc-content .box-item').each(function(i,e){
  imgEl = $(this).find('.img-area img');
  titleEl = $(this).find('.txt-area .title');
  descEl = $(this).find('.txt-area .desc');

  gsap.from(e,{
    scrollTrigger:{
      trigger:e,
      start:"0% 80%",
      end:"100% 80%",
      // markers:true,
      scrub:1,
      onUpdate:function(self){
        if(self.direction >= 1){
          rotateBoxMotion1 = gsap.to(e,{
            rotation:2,
          })
        }else{
          rotateBoxMotion2 = gsap.to(e,{
            rotation:-2,
          })
        }
      }
    },
  })



  Motion = gsap.timeline({
    scrollTrigger:{
      trigger:e,
      start:"0% 80%",
      end:"100% 80%",
      // markers:true,
      scrub:1,
    },
  })
  Motion
  .addLabel('a')
  .from(titleEl,{opacity:0,yPercent:20},'a')
  .from(descEl,{opacity:0,yPercent:20},'a+=0.3')
  .from(imgEl,{opacity:0,yPercent:20},'a+=0.6')
})




/**
   * sc-txt-slide
   * txt-item
   */
gsap.to('.txt-item',{
  scrollTrigger:{
    trigger:".sc-txt-slide",
    start:" 0% 0%",
    end:"100% 0%",
    scrub:1,
},
'animation-direction': 'alternate'
})

txtSlideMotion = gsap.to('.sc-txt-slide .txt-list .txt-item',1,{
    xPercent:-100,
    repeat:-1,
    ease:'none'
  })

  $('.sc-txt-slide .txt-list').hover(function(){
    txtSlideMotion.pause()
  },function(){
    txtSlideMotion.play()
  })



  //mouseover, mouseout
$('.sc-txt-slide .txt-list').mouseover(function(e){
  e.preventDefault();
  $(this).find('.txt-item').addClass('on')
});

$('.sc-txt-slide .txt-list').mouseout(function(e){
  e.preventDefault();
  $(this).find('.txt-item').removeClass('on')
});



/**
* .sc-series .img-area
*/
gsap.from('.sc-series .img-area img',{
  scrollTrigger:{
    trigger:'.sc-series .series-list',
    start:"0% 70%",
    end:"100% 100%",
    // markers:true,
    scrub:1
  },
  yPercent:10,
  scale:2,
  opacity:.5
})


/**
   * sc-board
   * board-item
   */
//desc
$('.board-item').click(function(e){
  e.preventDefault();
  if ($(this).hasClass('on')){ //sub이 열렸을 때
    $('.board-item .desc').stop().slideUp(); //1 /닫아요
    $('.board-item').removeClass('on') //1 /전체 클래스 빼주기

} else{ //sub이 닫혔을 때,버튼 누르기 전 
    $('.board-item .desc').stop().slideUp(); //1
    $(this).find('.desc').stop().slideDown()//2
    
    $('.board-item').removeClass('on') //1 /원래버튼 눌렀다가 다른버튼 눌렀을 때 원래버튼이 닫히게끔
    $(this).addClass('on')//2
}
});


//푸터


 


})// 지우지 말 것