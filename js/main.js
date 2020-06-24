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
const data [];

const gal_links = document.querySelectorAll('.gallery a');
gal_links.forEach((link) => {
    let cap = link.getAttribute('data-title');
    data.push(cap);
});

const thumbnail = document.querySelectorAll('.thumbnail');
const search = document.querySelector('#searchbox');

const handleSearch = () => {
    let val = searchbox.value.toLowerCase;

    for(let i=0; i < data.length; i++) {
        if (data[i].includes(val)){
            gal_links[i].style.display = 'block';
        } else {
            gal_links[i].style.display = 'none';
        }
    }
}