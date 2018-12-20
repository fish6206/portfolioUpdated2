//sidebar
$('.ui.sidebar').first()
.sidebar('attach events', '#sidebarBtn')
;
$('#sidebarBtn')
.removeClass('disabled')
;

//show portfolio button
$(".show-port").on("click", function () {
    $("#title-button").empty().html("<h1>Portfolio</h1>").addClass("ui huge centered header");
    $("#div1").fadeIn(1000);
    $("#div2").fadeIn(2000);
    $("#hide-port").fadeIn(3000);
    $("#about-me").slideUp(800);
    $("#comp-img").fadeOut(2000);
    $("#help-div").fadeOut(2000);
    $("#contact-form").fadeOut(2000);
});
//hide portfolio button
$("#hide-port").on("click", function () {
    $("#div1").slideUp(2000);
    $("#div2").slideUp(1000);
    $("#hide-port").fadeOut();
    $("#title-button").empty().html("<button>View Portfolio</button>");
    $("#about-me").slideDown(3500);
    $("#comp-img").fadeIn(4000);
    $("#help-div").fadeIn(4000);
    $("#contact-form").fadeIn(4000);
});
//about me sidebar
$("#hide-port-bar").on("click", function () {
    $("#div1").slideUp(2000);
    $("#div2").slideUp(1000);
    $("#hide-port").fadeOut();
    $("#title-button").empty().html("<button>View Portfolio</button>");
    $("#comp-img").fadeIn(4000);
    $("#help-div").fadeIn(4000);
    $("#about-me").slideDown(3500);
    $("#contact-form").fadeIn(4000);
});

//semantic ui card
$('.special.cards .image').dimmer({
on: 'hover'
});

//SharePac Semantic activate popup (learn more btn) 
$(".sharepac-desc-btn").on("click", function () {
$('.popup-sharepac')
    .modal('show')
    ;
});

//Bar Finder Semantic activate popup (learn more btn) 
$(".barfinder-desc-btn").on("click", function () {
$('.popup-barfinder')
    .modal('show')
    ;
});

//Friend Finder Semantic activate popup (learn more btn) 
$(".friendfinder-desc-btn").on("click", function () {
$('.popup-friendfinder')
    .modal('show')
    ;
});

//Arnold Trivia Semantic activate popup (learn more btn) 
$(".arnold-desc-btn").on("click", function () {
$('.popup-arnold')
    .modal('show')
    ;
});