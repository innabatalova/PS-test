const popup = () => {
  const buttonPopupOpen = document.querySelector(".button-popup-open");
  const buttonPopupClose = document.querySelector(".popup__button__close");
  const popup = document.querySelector(".popup");
  const dynamicsButtons = document.querySelector(".dynamics__buttons");
  const tl = gsap.timeline();

  //открытие/закрытие попапа
  const openPopup = () => {
    setTimeout(function () {
      dynamicsButtons.style.display = "none";
    }, 1800);

    popup.style.display = "block";
    tl.to(".popup", {
      duration: 1,
      ease: "slow(0.7, 0.7, false)",
      y: 0,
      opacity: 1,
      x: 0,
      scale: 1,
    });
  };

  buttonPopupOpen.addEventListener("click", (event) => {
    event.preventDefault();

    const buttonPopupPath = buttonPopupOpen.querySelectorAll("path");
    buttonPopupPath.forEach((item) => {
      item.style.fill = "#FCBAD7";
    });

    openPopup();
  });

  const closePopup = () => {
    dynamicsButtons.style.display = "flex";

    tl.to(".popup", { duration: 1.3, x: -1200, scale: 0.1 });
  };

  buttonPopupClose.addEventListener("click", (event) => {
    event.preventDefault();

    const buttonPopupPath = buttonPopupOpen.querySelectorAll("path");
    buttonPopupPath.forEach((item) => {
      item.style.fill = "#CE005B";
    });

    closePopup();
  });
};

popup();
