$(document).ready(function () {
  function openForm() {
    $("#formulario").addClass("open");
  }

  function closeForm() {
    $("#formulario").removeClass("open");
  }

  const formID = "#form-teste-bw-squads-gerenciados-contato-com-especialista-hr-always-on-4088a7e81db96be1f2c3";

  const busca = setInterval(() => {
    const form = document.querySelector(formID);
    if (form) {
      $("label:contains('Email*')").html('E-mail*');
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
