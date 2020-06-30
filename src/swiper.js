import Swiper from "swiper";

const startSlider = () => {
  const swiper = new Swiper(".swiper-container", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  return swiper;
};

export default startSlider;
