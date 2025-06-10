

$(document).ready(function(){

    // wow initiation
    new WOW().init();

    // navigation bar toggle
    $('#navbar-toggler').click(function(){
        $('.navbar-collapse').slideToggle(400);
    });

    // navbar bg change on scroll
    $(window).scroll(function(){
        let pos = $(window).scrollTop();
        if(pos >= 100){
            $('.navbar').addClass('cng-navbar');
        } else {
            $('.navbar').removeClass('cng-navbar');
        }
    });
     window.scrollToSection = function(id) {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }


    // team carousel 
    $('.team .owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        dots: true,
        nav: false,
        responsiveClass: true,
        responsive:{
            0:{
                items: 1
            }, 
            600:{
                items: 2
            },
            1000:{
                items: 2
            }
        }
    });

    // menu-ajuste
    const $menu = $('.navbar-collapse');
    const $toggler = $('#navbar-toggler');
    const $icon = $toggler.find('i');

    // Toggle menu ao clicar no botão
    $toggler.click(function () {
        $menu.toggleClass('navbar-expanded');

        const isOpen = $menu.hasClass('navbar-expanded');

        if (isOpen) {
            $icon.removeClass('fa-bars').addClass('fa-times');
        } else {
            $icon.removeClass('fa-times').addClass('fa-bars');
        }
    });

    $(".nav-link").click(function () {
        $(".navbar-collapse").removeClass("navbar-expanded");
        $(".navbar-toggler i").removeClass("fa-times").addClass("fa-bars");
    });



    // projects carousel 
    $('.projects .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
        nav: false,
        items: 1
    });

    //Envio do email
    document.getElementById("contact-form").addEventListener("submit", function (e) {
        e.preventDefault(); 

        // Captura os dados
        const form = e.target;
        const formData = new FormData(form);

        fetch("https://formsubmit.co/ajax/seuemail@gmail.com", {
            method: "POST",
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
            .then(response => {
                if (response.ok) {
                    form.reset();
                    document.getElementById("form-success").style.display = "block";
                } else {
                    alert("Erro ao enviar. Tente novamente.");
                }
            })
            .catch(error => {
                alert("Erro inesperado.");
                console.error(error);
            });
    });


});