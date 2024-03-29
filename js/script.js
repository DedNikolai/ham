$(document).ready(function () {
    masonry();
    butonClick();
    masonryButton();
    navbarScroll();
    imazinNavbarClick();

////////////////TABS//////////////
    $(".services-tab-item").not(":first").hide();
    $(".services-tab-link").click(function() {
        $(".services-tab-link").removeClass("services-tab-active").eq($(this).index()).addClass("services-tab-active");
        $(".services-tab-item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("services-tab-active");

    $('ham-button').click(function (event) {
        $('')
    });
///////////MODAL/////////////////
    $(".btn-mdl").click(function(e){
        $('.modal').addClass('modal-win');
        $(".modal-overlay").addClass('overlay-open');
    });
    $(".modal-overlay").click(function(e){
        // console.log($(e.target).hasClass('overlay'));
        $('.modal').removeClass('modal-win');
        $(".modal-overlay").removeClass('overlay-open');
    });
    $(".form-button").click(function(e){
        // console.log($(e.target).hasClass('overlay'));
        $('.modal').removeClass('modal-win');
        $(".modal-overlay").removeClass('overlay-open');
    });
    $(".networks-button").click(function(e){
        // console.log($(e.target).hasClass('overlay'));
        $('.modal').removeClass('modal-win');
        $(".modal-overlay").removeClass('overlay-open');
    });
/////////slider/////////////////
    $(".review-main-item").not(":first").hide();
    $('.navlist-img').click(function () {
        $(".review-main-item").eq($('.navlist-img-active').index()).hide();
        $('.navlist-img-active').removeClass('navlist-img-active');
        $(this).addClass('navlist-img-active');
        $(".review-main-item").eq($(this).index()).fadeIn()
    });

    $('#prev').click(function () {
        let currentIndex = $('.navlist-img-active').index();
        $(".review-main-item").eq(currentIndex).hide();
        $('.navlist-img-active').removeClass('navlist-img-active');
        $('.navlist-img').eq(currentIndex-1).addClass('navlist-img-active');
        $(".review-main-item").eq(currentIndex-1).fadeIn();
    });

    $('#next').click(function () {
        let currentIndex = $('.navlist-img-active').index();

        $(".review-main-item").eq(currentIndex).hide();
        currentIndex = currentIndex === $('.navlist-img').length-1 ? -1 : $('.navlist-img-active').index();
        $('.navlist-img-active').removeClass('navlist-img-active');
        $('.navlist-img').eq(currentIndex+1).addClass('navlist-img-active');
        $(".review-main-item").eq(currentIndex+1).fadeIn();
    });

    /////////Imazing menu click/////////////////
    function imazinNavbarClick() {
        $('.portfolio_filter').click(function () {
            $('.portfolio_gallery img').css('display', 'block')
            $('.portfolio_gallery img').not(`.${$(this).attr('id')}`).css('display', 'none')
            $('.portfolio_filter').eq($('.portfolio_filter').index($('.portfolio_active'))).removeClass('portfolio_active')
            $(this).addClass('portfolio_active');
            count = 0;
            $('.portfolio_category_title').text($(this).text())
            $('.portfolio_gallery').css({'height': `${height}`});
            $('#portfolio_load_batton').css('display', 'inline-block')
        })
    }

    /////////Button for best photo block/////////////////
    function butonClick() {
        $('#portfolio_load_batton').click(function () {
            loadAnimation('#imazing-photo-button');
            setTimeout(function () {
                stopAnimation('#imazing-photo-button');
                if (coutOfPhotos() >= 24 + count*12) {
                    $('.portfolio_gallery').css({'height': `${height + height*(count+1)}`});
                } else {
                    $('.portfolio_gallery').css({'height': `auto`});
                }
                count++;
                if (count == 2) {
                    $('#portfolio_load_batton').css('display', 'none')
                }
            }, 2000)
        })
    }
    /////////Scroll/////////////////
    function navbarScroll() {
        $('.navbar_item_link').click(function (e) {
            e.preventDefault();
            let id = $(this).attr('href');
            let pos = $(id).offset().top;
            $('html, body').animate({scrollTop: pos}, 1500)
        })
    }
    /////////Masonry/////////////////
    function masonry() {
        $('.best_images_gallery').imagesLoaded(function () {
            $('.best_images_gallery').masonry({
                itemSelector: '.best-photo',
                columnWidth: 370,
                gutter: 10,
                fitWidth: true,
            });
        })
    }

    function masonryButton() {
        $('#best-images-button').click(function () {
            loadAnimation('#best-images-button');
            setTimeout(function () {
                stopAnimation('#best-images-button');
                $('.best_images_gallery .best-photo').removeClass('hidden-photo')
                masonry();
                $('.best_images_gallery').css({'margin-bottom': '100px'})
                $('#best-images-button').hide()
            }, 2000)
        })
    }
    /////////Animation/////////////////
    function loadAnimation(button) {
        $('.anime-container').css('display', 'block');
        $(button).css('opacity', '100%');
    }

    function stopAnimation(button) {
        $('.anime-container').css('display', 'none');
        $(button).css('display', 'inline-block');
    }
    /////////Helped Functions/////////////////
    let count = 0;
    let height = $('.portfolio_gallery').height();

    function coutOfPhotos() {
        let quantity = 0;
        for (let i = 0; i < $('.portfolio_gallery img').length; i++) {
         quantity += $($('.portfolio_gallery img')[i]).css('display') != 'none' ? 1 : 0;
        }
        return quantity;
    }
})
