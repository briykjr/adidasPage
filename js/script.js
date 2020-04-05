$( function() {
    $(".menu-toggle").on("click", function() {
        $("nav").addClass("active");
        $(".fa-times").addClass("active");
        $(".fa-times.active").on("click", function() {
            $("nav").removeClass("active");
        });
    });
});