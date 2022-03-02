const mobileModal_navItem = document.getElementsByClassName(
  "mobile-modal__nav-item"
);

for (let i = 0; i < mobileModal_navItem.length; ++i)
  mobileModal_navItem[i].addEventListener("click", () => {
    const mobileModal_subNav = mobileModal_navItem[i].childNodes[3],
      mobileModal_subNav_link = mobileModal_navItem[i].childNodes[1];

    const style = window.getComputedStyle(mobileModal_subNav);
    if (
      style.display === "none" ||
      mobileModal_subNav.style.display === "none"
    ) {
      mobileModal_subNav.style.display = "block";
      mobileModal_subNav_link.style.color = "#FD4766";
    } else {
      mobileModal_subNav.style.display = "none";
      mobileModal_subNav_link.style.color = "#1f1f25";
    }
  });

const mobileModal = document.querySelector(".mobile-modal"),
  toggleBtn = document.querySelector(".btn-toggle"),
  closeBtn = document.querySelector(".mobile-modal__close");

toggleBtn.addEventListener("click", () => {
  toggleBtn.style.borderColor = "#fff";
  mobileModal.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  toggleBtn.style.borderColor = "transparent";
  mobileModal.style.display = "none";
});

// Back to top button with progress
// Reference from: https://www.jqueryscript.net/other/back-top-scroll-indicator.html#google_vignette
(function ($) {
  $(document).ready(function () {
    "use strict";

    //Scroll back to top

    var progressPath = document.querySelector(".progress-wrap path");
    var pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition =
      "none";
    progressPath.style.strokeDasharray = pathLength + " " + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition =
      "stroke-dashoffset 10ms linear";
    var updateProgress = function () {
      var scroll = $(window).scrollTop();
      var height = $(document).height() - $(window).height();
      var progress = pathLength - (scroll * pathLength) / height;
      progressPath.style.strokeDashoffset = progress;
    };
    updateProgress();
    $(window).scroll(updateProgress);
    var offset = 50;
    var duration = 550;
    jQuery(window).on("scroll", function () {
      if (jQuery(this).scrollTop() > offset) {
        jQuery(".progress-wrap").addClass("active-progress");
      } else {
        jQuery(".progress-wrap").removeClass("active-progress");
      }
    });
    jQuery(".progress-wrap").on("click", function (event) {
      event.preventDefault();
      jQuery("html, body").animate({ scrollTop: 0 }, duration);
      return false;
    });
  });
})(jQuery);
