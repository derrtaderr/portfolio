function activateGallery() {
    let thumbnails = document.querySelectorAll("#gallery-thumbs > div > img");
    let mainImage = document.querySelector("#gallery-video iframe");
    thumbnails.forEach(function(thumbnail){
    //preload large images
        largeVersion = new Image();
        largeVersion.src = thumbnail.dataset.FILL_IN;

        thumbnail.addEventListener("click", function(){
        // code to set clicked image as amin image.
            let newImageSrc = thumbnail.dataset.largeVersion;
            mainImage.setAttribute("src", newImageSrc);

        //change which image is current
            document.querySelector(".current").classList.remove("current");
            thumbnail.parentNode.classList.add("current");

        //Update image info
            let galleryInfo = document.querySelector("#gallery-info");
            let title       = galleryInfo.querySelector(".title");
            let description = galleryInfo.querySelector(".description");

            title.innerHTML       = thumbnail.dataset.title;
            description.innerHTML = thumbnail.dataset.description;
        });
    });
}



