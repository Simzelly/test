$(function(){

    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 3,

        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
      });

    $(".ham").on({
        click:function(){
            $("#h_submenu").css({
                display:'flex'
            }),
            $("#h_submenu").animate({
                right:'0px'
            })
        }
    });

    $("#h_submenu span").on({
        click:function(){
            $("#h_submenu").animate({
                right:'-100%'
            })
        }
    })




    /////
});