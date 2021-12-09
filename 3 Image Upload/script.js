const image = document.querySelector('#image');
const wrapper = document.querySelector('#wrapper');

let uploaded_image;

image.addEventListener('change', function() {
    const readerImage = new FileReader();
    readerImage.addEventListener('load', () => {
        uploaded_image = readerImage.result;
        wrapper.style.backgroundImage = `url(${uploaded_image})`
    })
    readerImage.readAsDataURL(this.files[0]);
})