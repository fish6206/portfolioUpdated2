//sidebar
$('.ui.sidebar').first()
.sidebar('attach events', '#sidebarBtn')
;
$('#sidebarBtn')
.removeClass('disabled')
;

//show portfolio button
$(".show-port").on("click", function () {
    $("#title-button").empty().html("<h1>Portfolio</h1>").addClass("portfolio-title text-align:center;");
    $("#div1").fadeIn(1000);
    $("#div2").fadeIn(2000);
    $("#div3").fadeIn(2000);
    $("#hide-port").fadeIn(3000);
    $("#about-me").slideUp(800);
    $("#comp-img").fadeOut(2000);
    $("#help-div").fadeOut(2000);
    $("#contact-form").fadeOut(2000);
});
//hide portfolio button
$("#hide-port").on("click", function () {
    $("#div1").slideUp(2000);
    $("#div2").slideUp(1500);
    $("#div3").slideUp(1000);
    $("#hide-port").fadeOut();
    $("#title-button").empty();
    $("#title-button").append(`
        <div class="ui animated fade huge green button" tabindex="0">
            <div class="visible content">View Portfolio!</div>
                <div class="hidden content">
                    <i class="thumbs up outline icon"></i>
            </div>
        </div>
        `);  
    $("#about-me").slideDown(3500);
    $("#comp-img").fadeIn(4000);
    $("#help-div").fadeIn(4000);
    $("#contact-form").fadeIn(4000);
});
//about me sidebar
$("#hide-port-bar").on("click", function () {
    $("#div1").slideUp(2000);
    $("#div2").slideUp(1500);
    $("#div3").slideUp(1000);
    $("#hide-port").fadeOut();
    $("#title-button").empty();
    $("#title-button").append(`
        <div class="ui animated fade huge green button" tabindex="0">
            <div class="visible content">View Portfolio!</div>
                <div class="hidden content">
                    <i class="thumbs up outline icon"></i>
            </div>
        </div>
        `); 
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

//Archer Clicky Semantic activate popup (learn more btn) 
$(".archer-desc-btn").on("click", function () {
    $('.popup-archer')
        .modal('show')
        ;
    });

//Eat the Burger Semantic activate popup (learn more btn) 
$(".burger-desc-btn").on("click", function () {
    $('.popup-burger')
        .modal('show')
        ;
    });

//Arnold Trivia Semantic activate popup (learn more btn) 
$(".arnold-desc-btn").on("click", function () {
$('.popup-arnold')
    .modal('show')
    ;
});

//contact form
$("#submit-button").on("click", function () {
//$(document).ready(function() {
    //Save references to elements. Don't do DOM walks in event handlers when not needed.
    var $sendEmailEl = $('#submit-button');
    var $subjectEl = $('#enquiry');
    var $name = $('#name');
    var $email = $('#email');
    var $telephone = $('#telephone');
    var $bodyEl = $('#message');
    function updateEmailLink() {
    // %0d = line break %20 = space between words inside email
        $sendEmailEl.attr('href', 'mailto:fish.greg4@gmail.com?' +
            'subject=' + encodeURIComponent($subjectEl.val()) +
            '&body=' + 'Name: ' + encodeURIComponent($name.val()) + '%0d%0d' +
            'Email: ' + encodeURIComponent($email.val()) + '%0d%0d' +
            'Telephone: ' + encodeURIComponent($telephone.val()) + '%0d%0d' +
            'Message: ' + '%0d' + encodeURIComponent($bodyEl.val())
            );
        console.log($sendEmailEl.attr('href'));
    }
    $('#subject,#body').on('input', updateEmailLink);
    updateEmailLink();
});
