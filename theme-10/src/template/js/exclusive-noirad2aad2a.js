// ---------- Nominal [ON CHANGE] --------------------------------------------------
$(document).on('change', '#selectBank', function(e){
    e.preventDefault();
// console.log(this.value);

var id = this.value;


var $savingBook = $('#savingBook' + id);
var accountNum = $savingBook.find('.bank-account-number').text();
// console.log(accountNum);

$('#copyNum').attr('data-copy', accountNum);

});

// Gallery Single Slider
window.GALLERY_SINGLE_SLIDER = true;

// Love Story
var init_love_story = function() {

    var galleryWrap = $('.story-chitra__slider-wrap');

    if (galleryWrap.length) {

        var sliderForOptions = {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            // fade: false,
                            arrows: false,
                            adaptiveHeight: true,
                            // infinite: false,
                            useTransform: true,
                            variableWidth: true,
                            speed: 300,
                            arrows: false,
                            cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
                        }
                        
        // Sliders
        var sliderForWrap = $('.story-chitra__slider-for');

        $(sliderForWrap)
            .on('init', function(event, slick) {                
                $('.story-chitra__slider-nav__item__manual').eq(0).addClass('is-active');            

                var width = $(this).find('.story-chitra__slider-for__item').width();
                var height = width + (width / 3);

                $('.story-chitra__slider-for__item').css('width', (320+'px'));
                $('.story-chitra__slider-for__item').css('height', height + 'px');
            })
            .slick(sliderForOptions);
        
        $(sliderForWrap).on('afterChange', function(event, slick, currentSlide) {
            var manualNav = $('.story-chitra__slider-nav__item__manual');
            for (var i = 0; i < manualNav.length; i++) {                
                var slickIndex = $(manualNav[i]).attr('data-slick-index');            
                if (slickIndex <= currentSlide) $(manualNav[i]).addClass('is-active')
                if (slickIndex > currentSlide) $(manualNav[i]).removeClass('is-active')
            }        
        });    

    }

}

// On Ready
$(document).ready(function(){
    
    // >>> Viewport
    function viewport() {
        var e = window, a = 'inner';
        if (!('innerWidth' in window )) {
            a = 'client';
            e = document.documentElement || document.body;
        }

        return { width : e[ a + 'Width' ] , height : e[ a + 'Height' ] };
    }


    if (typeof gallerySingleSlider === 'function') {

        var $singleSliderContainer = $('#singleSliderContainer');        // Single Slider Container        
        var configs = {
            container: $singleSliderContainer,
            dots : false,
            infinite : true,
            centerMode: false,
            variableWidth: true,
            slideToShow: 3,
            touchThreshold: 10000,
            autoplay: true,
            autoplaySpeed: 2000
        }
        
        gallerySingleSlider(configs);


        var vp = viewport();

        // Single Slider Picture
        $singleSliderContainer.find('.singleSliderPicture').each(function(i, picture){
            var width = $(this).width();

            if ( vp.width > 1440 ) {
                // width = width + (width / 3);
                width = width - 10;
                var height = width + (width / 3);

                // $(picture).css('--width', width + 'px');
                // $(picture).css('--height', height + 'px');
            }

        });

    }

    init_love_story();

});