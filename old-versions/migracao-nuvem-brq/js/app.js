$(document).ready(function () {
    $("#conversion-form > div.bricks-form__fieldset > div:nth-child(2) > label")
        .parent()
        .children("label")
        .html("E-mail");

    $(".carrossel-migre").slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        nextArrow:
            '<button type="button" class="slick-next"><span></span></button>',
        prevArrow:
            '<button type="button" class="slick-prev"><span></span></button>',
    });

    function openForm() {
        $("#formulario").addClass("open");
    }

    function closeForm() {
        $("#formulario").removeClass("open");
    }

    const formID =
        "#conversion-form-teste-bw-cloud-contato-com-especialista-hr-always-on";
    const busca = setInterval(() => {
        const form = document.querySelector(formID);
        if (form) {
            $("label:contains('Email*')").html("E-mail*");
            clearInterval(busca);
            $("#rd-button-l44j1tlw").click(function () {
                var email = $("input[name='email']").val();

                if (!emailCorporativo(email)) {
                    $(".emailcorporativo").hide();

                    $("input[name='email']").addClass("error");

                    $(
                        '<label generated="true" class="error emailcorporativo">Insira um e-mail corporativo</label>'
                    ).insertAfter("input[name='email']");

                    return false;
                } else {
                    return true;
                }
            });

            var invalidDomains = [
                "@gmail.",
                "@yahoo.",
                "@hotmail.",
                "@live.",
                "@aol.",
                "@outlook.",
                "@bol.",
                "@uol.",
            ];

            function emailCorporativo(email) {
                for (var i = 0; i < invalidDomains.length; i++) {
                    var domain = invalidDomains[i];

                    if (email.indexOf(domain) != -1) {
                        return false;
                    }
                }

                return true;
            }
        } else {
            console.log("nao achou o form");
        }
    }, 100);
});
