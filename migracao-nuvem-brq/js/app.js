$(document).ready(function () {
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

  //Validando número de telefone
  setTimeout(() => {
    let telefone = document.querySelector("input[type=tel]");
    let buttonSubmit = document.querySelector("input[type=submit]");

    telefone.addEventListener("input", handlePhoneInput, false);
    buttonSubmit.addEventListener("submit", handlePhoneInput, false);

    function handlePhoneInput(e) {
      $(buttonSubmit).removeClass("btn-disabled");
      $(buttonSubmit).attr("disabled", false);
      $(".error-tel").remove();
      $(telefone).focus();

      let numberPhone = e.target.value;
      let formatedNumberPhone = numberPhone.replace(/[^a-zA-Z0-9_]/g, "");

      if (formatedNumberPhone.length < 10) {
        $(buttonSubmit).addClass("btn-disabled");
        $(buttonSubmit).attr("disabled", true);
        return $(telefone).after(
          "<label class='error-tel hs-error-msg'>Número de telefone inválido.</label>"
        );
      } else if (formatedNumberPhone.length >= 10) {
        $(buttonSubmit).addClass("btn-disabled");
        $(buttonSubmit).attr("disabled", true);
        const allEqual = arr => arr.every(v => v === arr[0]);
        let isEqual = allEqual(formatedNumberPhone.split(""));

        if (isEqual) {
          return $(telefone).after(
            "<label class='error-tel hs-error-msg'>Número de telefone inválido.</label>"
          );
        } else {
          $(buttonSubmit).removeClass("btn-disabled");
          $(buttonSubmit).attr("disabled", false);
          $(".error-tel ").remove();
        }
      }
    }

    //Insert current url in field url_page
    $("input[name=url_pagina]").val(location.href);
  }, 800);
});

function openForm() {
  $("#formulario").addClass("open");
}

function closeForm() {
  $("#formulario").removeClass("open");
}
