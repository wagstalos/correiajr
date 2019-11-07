
(function ($) {
    $(window).load(function () {

        $("#content-1").mCustomScrollbar({
            theme: "minimal"
        });

    });
    //para linkar com efeito de animação
    var $doc = $('html,body');
    $('.scroll-page').click(function () {
        $doc.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
        return false;
    });
})(jQuery);