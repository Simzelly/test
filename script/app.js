$(function(){

    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows:false,

        responsive: [
            {
                breakpoint: 768,
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
    });

    $("#top").click(function(){
        $(window).scrollTop(0);
    })

    $(".gangnam").on({
        click:function(){
            $(".sec4_slide1").attr('src','./img/place1_slide1.jpg'),
            $(".sec4_slide2").attr('src','./img/place1_slide2.jpg')
        }
    });

    $(".sungnam").on({
        click:function(){
            $(".sec4_slide1").attr('src','./img/place2_slide1.jpg'),
            $(".sec4_slide2").attr('src','./img/place2_slide2.jpg')
        }
    });

    $(".busan").on({
        click:function(){
            $(".sec4_slide1").attr('src','./img/place3_slide1.jpg'),
            $(".sec4_slide2").attr('src','./img/place3_slide2.jpg')
        }
    });

    $(".daegu").on({
        click:function(){
            $(".sec4_slide1").attr('src','./img/place4_slide1.jpg'),
            $(".sec4_slide2").attr('src','./img/place4_slide2.jpg')
        }
    });

    $(".ulsan").on({
        click:function(){
            $(".sec4_slide1").attr('src','./img/place5_slide1.jpg')
            $(".sec4_slide2").attr('src','./img/place5_slide2.jpg')
        }
    });

    $(".gwangju").on({
        click:function(){
            $(".sec4_slide1").attr('src','./img/place6_slide1.jpg')
            $(".sec4_slide2").attr('src','./img/place6_slide2.jpg')
        }
    })




    /////
});