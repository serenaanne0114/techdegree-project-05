//lightbox
lightbox.option({
  'fadeDuration': 200,
  'imageFadeDuration': 200,
  'resizeDuration': 300,
  'disableScrolling': true,
  'alwaysShowNavOnTouchDevices': true,
  'wrapAround':true 
})

//searchbox
const searchBox= $(document).ready(function () {
    const images = document.getElementsByTagName('a');
    $('#search').on('keyup', function () {
        const search = $('#search').val().toLowerCase;
        for (let i = 0; i < images.length; i++) {
            const searchVal = images[i].getAttribute('data-title');
            if (searchVal.toLowerCase().indexOf(search) > -1) {
                images[i].style.display = '';
            }
            else {
                images[i].style.display = 'none';
            }
        }
    });
});



