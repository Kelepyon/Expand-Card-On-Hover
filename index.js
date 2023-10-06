const cardContainer = document.querySelector(".card-container"),
  imagePreview = cardContainer.querySelectorAll(".image-preview"),
  images = cardContainer.querySelectorAll(".image-preview img"),
  video = cardContainer.querySelectorAll("video");

window.onload = () => {
  cardContainer.onmouseenter = () => {
    images.forEach((image) => {
      image.style.opacity = 0.5;
    });
  };
  cardContainer.onmouseleave = () => {
    images.forEach((image) => {
      image.style.opacity = 1;
    });
  };

  let tl = gsap.timeline();

  tl.to(imagePreview, {
    duration: 1,
    clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)",
    stagger: 0.1,
  });

  imagePreview.forEach((image, index) => {
    image.onmouseenter = () => {
      video[index].play();
    };
    image.onmouseleave = () => {
      video[index].pause();
    };
  });
};
