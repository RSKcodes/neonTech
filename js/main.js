// map for vadodara location
function initMap() {

    // my location
    const loc = new google.maps.LatLng(parseFloat('22.32'), parseFloat('73.25'));
    const map = new google.maps.Map(document.getElementById('map'), {
        center: loc,
        zoom: 14
    });

    const marker = new google.maps.Marker({
        position: loc,
        map: map
    });
}

// smooth scrolling 

$(".mainNav a").on("click", function (event) {
    if (this.hash !== "") {
        event.preventDefault();
        const hash = this.hash;

        $('html , body').animate({
                scrollTop: $(hash).offset().top - 45
            },
            600
        );
    }
});