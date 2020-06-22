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
const thumbnail = document.querySelectorAll('.thumbnail');
const search = document.querySelector('#search');

const searchHandle = event => {
    const searchTerm = event.getAttribute("data-title").toLowerCase();
}

thumbnail.forEach(boxText => {
    const text = boxText.textContent.toLowerCase();
    const box = boxText.parentElement;

    if (text.indexOf(searchTerm) > -1) {
        box.style.display = "";
    } else {
        box.style.display = "none";
    }
});

search.addEventListener('keyup', searchHandle);