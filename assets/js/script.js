// ScrollSpy
document.addEventListener("DOMContentLoaded", function () {
    var scrollSpy = new bootstrap.ScrollSpy(document.body, {
        target: "#navbar",
        offset: 195,
    });
});

// menu background color change while scroll
$(window).on("scroll", function () {
    var menu_area = $("#navbar");
    if ($(window).scrollTop() > 200) {
        menu_area.addClass("sticky_nav");
    } else {
        menu_area.removeClass("sticky_nav");
    }
});

// menu hides after click (mobile menu)

$(document).on("click", ".navbar-collapse.show", function (e) {
    if ($(e.target).is("a") && $(e.target).attr("class") != "dropdown-toggle") {
        $(this).collapse("hide");
    }
});

// Tooltips

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
});

//  magnific popup

$(".zoom,.zoom1").magnificPopup({
    type: "image",
});

// Isotope filter

var $Container = $("#img-filter");
if ($Container.length > 0) {
    $Container.isotope({
        itemSelector: ".project",
        transitionDuration: "0.8s",
    });
    $(".img-filter").on("click", function (e) {
        $(".img-filter.active").removeClass("active");
        $(this).addClass("active");
        var selector = $(this).attr("data-filter");
        $Container.isotope({
            filter: selector,
        });
        return false;
    });

    $(window)
        .resize(function () {
            setTimeout(function () {
                $Container.isotope();
            }, 1000);
        })
        .trigger("resize");
}

// AOS
AOS.init({
    offset: 200, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 600, // values from 0 to 3000, with step 50ms
    easing: "ease-in-out", // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});
