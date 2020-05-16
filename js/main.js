//lightbox 


//searchbox
$(document).ready(function() {
    let images = getElementsByTagName('a');
    $('#search').on('keyup', function(){
        let search = $('#search').val().toLowerCase;
        for(let i=0; i<images.length; i++) {
            let searchVal = images[i].getAttribute('data-title');
            if (searchVal.toLowerCase().indexOf(search) > -1) {
                images[i].style.display = "";
            } else {
                images[i].style.display = none;
            }
        }
    });
});




