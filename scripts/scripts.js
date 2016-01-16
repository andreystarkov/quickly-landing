$(function() {
    isMobile = false;
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        isMobile = true;
    }
    $('section.wooden').each(function(){
        $(this).prepend('<div class="line-top"></div>');
        $(this).append('<div class="line-bottom"></div>');
    });

    $('#the-chief').css({'position': 'absolute', bottom: '0px', left: '0', width: '100%'});
    $('.chief img').css({'width': '100%'});
    $('#footer').css({'padding-bottom': '0px'});
    $('#footer .copyrights').css({bottom: '10px'});
    // right section order (for scroll animation)

    $('.section-feature').each(function(i, e) {
        $(this).css({'z-index': 20-i});
        i--;
    });

    function animateElement(obj, animationClass){
        obj.addClass('toggled animated '+animationClass)
          .one('webkitAnimationEnd oanimationend msAnimationEnd animationend',   
            function(e) {
                obj.removeClass('animated '+animationClass);
            }
        );
    }

    function aniToggle(obj, animationClass){
        obj.addClass('toggled animated '+animationClass)
          .one('webkitAnimationEnd oanimationend msAnimationEnd animationend',   
            function(e) {
                obj.removeClass('animated '+animationClass);
            }
        );
    }

    if( !isMobile ){
        $(window).scroll(function(){
            console.log($(this).scrollTop());

            if( $(this).scrollTop() > 500){
              $('#top').css({'position': 'fixed'}).addClass('toggled animated fadeInDown')
              .one('webkitAnimationEnd oanimationend msAnimationEnd animationend',   
                function(e) {
                   // $('#top').removeClass('animated fadeInDown');
                }
              );
            } else {
              $('#top').removeClass('toggled animated fadeInDown');
              $('#top').css({'position': 'absolute'});
            }
        });
        console.log('Mobile');
    } else console.log('Desktop');

    function addAnimation(element, type, delay){
        $(element).addClass('ani '+type).attr('data-wow-delay', delay);
    }

    function initAnimation(){

        // list of effects here: https://daneden.github.io/animate.css/

        // some of them may be slow, comment if

/*       addAnimation('.top .logo', 'bounceInDown', '0');

        addAnimation('.top .phone', 'fadeInDown', '0.1s');
        addAnimation('.top .register', 'fadeInUp', '0.2s');
        addAnimation('.top .login', 'fadeInUp', '0.4s');

        addAnimation('.section-top .caption p', 'fadeInLeft', '0.6s');
        addAnimation('.section-top .caption span', 'fadeInRight', '0.8s');
        addAnimation('#pizza', 'fadeInRight', '1.5s');*/

    //    addAnimation('.section-top .center', 'lightSpeedIn', '1.3s');

      //  addAnimation('.section-feature', 'slideInDown', '0');
    //    addAnimation('#bike', 'bounceInLeft', '1s');

    //    addAnimation('.section-feature h3', 'fadeInDown', '1.2s');
     //   addAnimation('.section-feature p', 'fadeInUp', '1.5s');
     //   addAnimation('.section-feature .button', 'fadeInUp', '1.8s');

    /*    addAnimation('.plate', 'bounceInUp', '1.5s');
        addAnimation('.fork', 'rotateInDownRight', '1.8s');
        addAnimation('.knife', 'rollIn', '2.2s'); */

     //   addAnimation('#gift', 'lightSpeedIn', '0.2s');

    //    addAnimation('.shroom-1', 'zoomInLeft', '1.8s');
    //    addAnimation('.shroom-2', 'zoomInRight', '2.1s');
    //    addAnimation('.garlic', 'bounceInRight', '1.2s');

    //    addAnimation('section hr', 'zoomIn', '1.2s');

    //   addAnimation('.app-1', 'bounceInLeft', '0.8s');
    //    addAnimation('.app-2', 'bounceInLeft', '1s');

    //    addAnimation('.links i', 'flipInY', '1.5s');

    //    addAnimation('#appstore', 'fadeInUp', '1.6s');
    //    addAnimation('#googleplay', 'fadeInUp', '1.8s');
    //    addAnimation('.dude-1, .person', 'bounceInUp', '1.6s');

        var wow = new WOW(
          {
            boxClass:     'ani',
            animateClass: 'animated',
            mobile:       false,
            live:         false,
            offset: 40
          }
        );

        wow.init();
    }

    initAnimation(); // comment this for disable scroll animation
});