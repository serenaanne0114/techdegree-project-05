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
let $thumbnail = $('.thumbnail');
let $search = $('#searchbox');

$search.on('keyup', function(){
    
    $thumbnail.each(function (index, thumbnail) {
        let $caption = $(this).attr('data-title').toLowerCase();
        let $inputUser = $search.val().toLowerCase();
        
        if ($caption.includes($inputUser)) {
            $(this).show; 
        } else {
            $(this).hide;
        }
    });
});