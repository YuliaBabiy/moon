import '../scss/style.scss';
import ImageViewer from 'awesome-image-viewer';

window.onload = function () {
  window.onscroll = function () {
    const header = document.getElementById('header');
    const sticky = header.offsetTop;

    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  };
}

document.querySelectorAll('.content-section__img-preview-container').forEach(function(el) {
  el.onclick = function (event) {
    new ImageViewer({
      images: [{ mainUrl: event.target.src }],
    });
  }
});
