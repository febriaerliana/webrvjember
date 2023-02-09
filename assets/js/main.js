(function () {
  "use strict";

  // var form = document.getElementById("formAwesome");
  // form.addEventListener("submit", onSubmitForm);

  // function onSubmitForm(e) {
  //   e.preventDefault();
  //   $("#formModal").modal("hide");
  //   $("#btnStart").hide();
  //   $("#message").show();
  // }

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all);
    if (selectEl) {
      if (all) {
        selectEl.forEach((e) => e.addEventListener(type, listener));
      } else {
        selectEl.addEventListener(type, listener);
      }
    }
  };

  /**
   * Easy on scroll event listener
   */
  const onscroll = (el, listener) => {
    el.addEventListener("scroll", listener);
  };

  /**
   * Back to top button
   */
  let backtotop = select(".back-to-top");
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add("active");
      } else {
        backtotop.classList.remove("active");
      }
    };
    window.addEventListener("load", toggleBacktotop);
    onscroll(document, toggleBacktotop);
  }

  /**
   * Mobile nav toggle
   */
  on("click", ".mobile-nav-toggle", function (e) {
    select("#navbar").classList.toggle("navbar-mobile");
    this.classList.toggle("bi-list");
    this.classList.toggle("bi-x");
  });

  /**
   * Mobile nav dropdowns activate
   */
  on(
    "click",
    ".navbar .dropdown > a",
    function (e) {
      if (select("#navbar").classList.contains("navbar-mobile")) {
        e.preventDefault();
        this.nextElementSibling.classList.toggle("dropdown-active");
      }
    },
    true
  );

  /**
   * Preloader
   */
  let preloader = select("#preloader");
  if (preloader) {
    window.addEventListener("load", () => {
      preloader.remove();
    });
  }

  /**
   * Testimonials slider
   */
  new Swiper(".testimonials-slider", {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    slidesPerView: "auto",
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },

      1200: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
    },
  });

  /**
   * Animation on scroll
   */
  window.addEventListener("load", () => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  });
})();

/**
 * KPR Simulation
 */
function showpay() {
  if (
    document.calc.loan.value == null ||
    document.calc.loan.value.length == 0 ||
    document.calc.loan2.value == null ||
    document.calc.loan2.value.length == 0 ||
    document.calc.months.value == null ||
    document.calc.months.value.length == 0 ||
    document.calc.rate.value == null ||
    document.calc.rate.value.length == 0
  ) {
    document.calc.pay.value = "Data Belum Lengkap";
  } else {
    var princ = document.calc.loan.value - document.calc.loan2.value;
    var term = document.calc.months.value;
    var intr = document.calc.rate.value / 1200;
    //document.calc.pay.value = princ * intr / (1 - (Math.pow(1/(1 + intr), term)));

    var cicilan = (princ * intr) / (1 - Math.pow(1 / (1 + intr), term));
    document.calc.pay.value = parseFloat(cicilan).toFixed(2);
  }

  //parseFloat(Math.round(num2 * 100) / 100).toFixed(2);
  // payment = principle * monthly interest/(1 - (1/(1+MonthlyInterest)*Months))
}

function element() {
  $("#element").priceFormat({
    prefix: "Rp",
    centsLimit: 0,
    thousandsSeparator: ".",
  });
}

const form = document.querySelector("form"),
  nextBtn = form.querySelector(".nextBtn"),
  backBtn = form.querySelector(".backBtn"),
  allInput = form.querySelector(".first input");

// nextBtn.addEventListener("click", () => {
//   allInput.forEach((input) => {
//     if ((input.value != "")) {
//       form.classList.add("secActive");
//     } else {
//       form.classList.add("secActive");
//     }
//   });
// });

nextBtn.addEventListener("click", () => form.classList.add("secActive"));
backBtn.addEventListener("click", () => form.classList.remove("secActive"));

$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});
