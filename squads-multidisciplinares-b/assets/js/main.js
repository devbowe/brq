// Executa ao carregar conteúdo da página
$(document).ready(() => {
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
      } else if (/^(\d)\1+$/.test(formatedNumberPhone.substring(2,20))) {
        $(buttonSubmit).addClass("btn-disabled");
        $(buttonSubmit).attr("disabled", true);
        return $(telefone).after(
          "<label class='error-tel hs-error-msg'>Número de telefone inválido.</label>"
        );
      } else {
        $(buttonSubmit).removeClass("btn-disabled");
        $(buttonSubmit).attr("disabled", false);
        $(".error-tel ").remove();
      }
    }

    // Slick Slider
    $(".slides").slick({
      infinite: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });

    const buscaUrlPagina = setInterval(() => {
      const urlPagina = document.querySelector("input[name='url_pagina']");

      if (urlPagina) {
        clearInterval(buscaUrlPagina);

        urlPagina.value = location.href;
      }
    }, 300);
  },1000);

  // Força digitar apenas letras no campo nome
  $("input[name=name]").keyup(function () {
    this.value = this.value.replace(
      /[^A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]/g,
      ""
    );
  });

  // Ao clicar ele rola a página até o ID definido
  function scrollToForm(target = "#first") {
    document.querySelector(target).scrollIntoView({
      behavior: "smooth",
    });
  }

  $("input[name='nome']").keyup(function () {
    this.value = this.value.replace(
      /[^A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]/g,
      ""
    );
  });

  // Abre o modal
  function openModalForm(e) {
    let handdleButton = $(e);
    let el = $("#section-1 #modal");
    handdleButton.attr("style", "display: none!important");
    el.removeClass("closed");
    el.addClass("open");
  }

  // Fecha o modal
  function closeModalForm() {
    let handdleButton = $(".open-modal-form");
    handdleButton.attr("style", "display: flex!important");
    let el = $("#section-1 #modal");
    el.removeClass("open");
    el.addClass("closed");
  }

  document.querySelector(".open-modal-form").addEventListener("click", openModalForm)
  document.querySelector(".close-button").addEventListener("click", closeModalForm)

  setTimeout(function () {
    // Phone Mask
    // jQuery Mask Plugin v1.7.7
    (function (f) {
      "function" === typeof define && define.amd
        ? define(["jquery"], f)
        : f(window.jQuery || window.Zepto);
    })(function (f) {
      var A = function (a, d, b) {
          var h = this,
            m,
            p;
          a = f(a);
          d = "function" === typeof d ? d(a.val(), void 0, a, b) : d;
          var c = {
            getCaret: function () {
              try {
                var e,
                  l = 0,
                  c = a.get(0),
                  g = document.selection,
                  d = c.selectionStart;
                if (g && !~navigator.appVersion.indexOf("MSIE 10"))
                  (e = g.createRange()),
                    e.moveStart(
                      "character",
                      a.is("input") ? -a.val().length : -a.text().length
                    ),
                    (l = e.text.length);
                else if (d || "0" === d) l = d;
                return l;
              } catch (b) {}
            },
            setCaret: function (e) {
              try {
                if (a.is(":focus")) {
                  var l,
                    c = a.get(0);
                  c.setSelectionRange
                    ? c.setSelectionRange(e, e)
                    : c.createTextRange &&
                      ((l = c.createTextRange()),
                      l.collapse(!0),
                      l.moveEnd("character", e),
                      l.moveStart("character", e),
                      l.select());
                }
              } catch (g) {}
            },
            events: function () {
              a.on("keydown.mask", function () {
                m = c.val();
              })
                .on("keyup.mask", c.behaviour)
                .on("paste.mask drop.mask", function () {
                  setTimeout(function () {
                    a.keydown().keyup();
                  }, 100);
                })
                .on("change.mask", function () {
                  a.data("changed", !0);
                })
                .on("blur.mask", function () {
                  m === a.val() || a.data("changed") || a.trigger("change");
                  a.data("changed", !1);
                })
                .on("focusout.mask", function () {
                  b.clearIfNotMatch && !p.test(c.val()) && c.val("");
                });
            },
            getRegexMask: function () {
              for (var e = [], a, c, g, b, k = 0; k < d.length; k++)
                (a = h.translation[d[k]])
                  ? ((c = a.pattern.toString().replace(/.{1}$|^.{1}/g, "")),
                    (g = a.optional),
                    (a = a.recursive)
                      ? (e.push(d[k]), (b = { digit: d[k], pattern: c }))
                      : e.push(g || a ? c + "?" : c))
                  : e.push(d[k].replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"));
              e = e.join("");
              b &&
                (e = e
                  .replace(
                    new RegExp("(" + b.digit + "(.*" + b.digit + ")?)"),
                    "($1)?"
                  )
                  .replace(new RegExp(b.digit, "g"), b.pattern));
              return new RegExp(e);
            },
            destroyEvents: function () {
              a.off(
                "keydown keyup paste drop change blur focusout DOMNodeInserted "
                  .split(" ")
                  .join(".mask ")
              ).removeData("changeCalled");
            },
            val: function (e) {
              var c = a.is("input");
              return 0 < arguments.length
                ? c
                  ? a.val(e)
                  : a.text(e)
                : c
                ? a.val()
                : a.text();
            },
            getMCharsBeforeCount: function (e, a) {
              for (var c = 0, b = 0, f = d.length; b < f && b < e; b++)
                h.translation[d.charAt(b)] || ((e = a ? e + 1 : e), c++);
              return c;
            },
            caretPos: function (e, a, b, g) {
              return h.translation[d.charAt(Math.min(e - 1, d.length - 1))]
                ? Math.min(e + b - a - g, b)
                : c.caretPos(e + 1, a, b, g);
            },
            behaviour: function (a) {
              a = a || window.event;
              var b = a.keyCode || a.which;
              if (-1 === f.inArray(b, h.byPassKeys)) {
                var d = c.getCaret(),
                  g = c.val(),
                  t = g.length,
                  k = d < t,
                  m = c.getMasked(),
                  n = m.length,
                  p =
                    c.getMCharsBeforeCount(n - 1) -
                    c.getMCharsBeforeCount(t - 1);
                m !== g && c.val(m);
                !k ||
                  (65 === b && a.ctrlKey) ||
                  (8 !== b && 46 !== b && (d = c.caretPos(d, t, n, p)),
                  c.setCaret(d));
                return c.callbacks(a);
              }
            },
            getMasked: function (a) {
              var l = [],
                f = c.val(),
                g = 0,
                m = d.length,
                k = 0,
                p = f.length,
                n = 1,
                u = "push",
                r = -1,
                q,
                v;
              b.reverse
                ? ((u = "unshift"),
                  (n = -1),
                  (q = 0),
                  (g = m - 1),
                  (k = p - 1),
                  (v = function () {
                    return -1 < g && -1 < k;
                  }))
                : ((q = m - 1),
                  (v = function () {
                    return g < m && k < p;
                  }));
              for (; v(); ) {
                var w = d.charAt(g),
                  x = f.charAt(k),
                  s = h.translation[w];
                if (s)
                  x.match(s.pattern)
                    ? (l[u](x),
                      s.recursive &&
                        (-1 === r ? (r = g) : g === q && (g = r - n),
                        q === r && (g -= n)),
                      (g += n))
                    : s.optional && ((g += n), (k -= n)),
                    (k += n);
                else {
                  if (!a) l[u](w);
                  x === w && (k += n);
                  g += n;
                }
              }
              a = d.charAt(q);
              m !== p + 1 || h.translation[a] || l.push(a);
              return l.join("");
            },
            callbacks: function (e) {
              var f = c.val(),
                h = f !== m;
              if (!0 === h && "function" === typeof b.onChange)
                b.onChange(f, e, a, b);
              if (!0 === h && "function" === typeof b.onKeyPress)
                b.onKeyPress(f, e, a, b);
              if ("function" === typeof b.onComplete && f.length === d.length)
                b.onComplete(f, e, a, b);
            },
          };
          h.mask = d;
          h.options = b;
          h.remove = function () {
            var b;
            c.destroyEvents();
            c.val(h.getCleanVal()).removeAttr("maxlength");
            b = c.getCaret();
            c.setCaret(b - c.getMCharsBeforeCount(b));
            return a;
          };
          h.getCleanVal = function () {
            return c.getMasked(!0);
          };
          h.init = (function () {
            b = b || {};
            h.byPassKeys = [9, 16, 17, 18, 36, 37, 38, 39, 40, 91];
            h.translation = {
              0: { pattern: /\d/ },
              9: { pattern: /\d/, optional: !0 },
              "#": { pattern: /\d/, recursive: !0 },
              A: { pattern: /[a-zA-Z0-9]/ },
              S: { pattern: /[a-zA-Z]/ },
            };
            h.translation = f.extend({}, h.translation, b.translation);
            h = f.extend(!0, {}, h, b);
            p = c.getRegexMask();
            !1 !== b.maxlength && a.attr("maxlength", d.length);
            b.placeholder && a.attr("placeholder", b.placeholder);
            a.attr("autocomplete", "off");
            c.destroyEvents();
            c.events();
            var e = c.getCaret();
            c.val(c.getMasked());
            c.setCaret(e + c.getMCharsBeforeCount(e, !0));
          })();
        },
        y = {},
        z = function () {
          var a = f(this),
            d = {};
          a.attr("data-mask-reverse") && (d.reverse = !0);
          "false" === a.attr("data-mask-maxlength") && (d.maxlength = !1);
          a.attr("data-mask-clearifnotmatch") && (d.clearIfNotMatch = !0);
          a.mask(a.attr("data-mask"), d);
        };
      f.fn.mask = function (a, d) {
        var b = this.selector,
          h = function () {
            var b = f(this).data("mask"),
              h = JSON.stringify;
            if ("object" !== typeof b || h(b.options) !== h(d) || b.mask !== a)
              return f(this).data("mask", new A(this, a, d));
          };
        this.each(h);
        b &&
          !y[b] &&
          ((y[b] = !0),
          setTimeout(function () {
            f(document).on("DOMNodeInserted.mask", b, h);
          }, 500));
      };
      f.fn.unmask = function () {
        try {
          return this.each(function () {
            f(this).data("mask").remove().removeData("mask");
          });
        } catch (a) {}
      };
      f.fn.cleanVal = function () {
        return this.data("mask").getCleanVal();
      };
      f("*[data-mask]").each(z);
      f(document).on("DOMNodeInserted.mask", "*[data-mask]", z);
    });

    $("#phone-75723112-7c84-4335-aba8-666f03aa289e").mask("+00 (00) 00000-0009");

    $("#phone-75723112-7c84-4335-aba8-666f03aa289e").blur(function (event) {
      if ($(this).val().length == 19) {
        // Celular com 9 digitos + 2 digitos DDD e 4 da mascara
        $("#phone-75723112-7c84-4335-aba8-666f03aa289e").mask("+00 (00) 00000-0009");
      } else {
        $("#phone-75723112-7c84-4335-aba8-666f03aa289e").mask("+00 (00) 0000-0009");
      }
    });
    console.log("rodou");
  }, 2000);
});
