<script src="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js"></script>


function toggleMenu() {
    var menu = document.getElementById("menuOptions");
    menu.classList.toggle("none")
    if (menu.style.display === "none") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}

$(document).ready(function() {
  $('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev">Previous</button>',
    nextArrow: '<button type="button" class="slick-next">Next</button>'
  });
});


function centralizeContent() {
  document.body.classList.add('centered-content');
}