//gsap.timeline().to(".test", { duration: 1, opacity: 0 });

const buttonPopupOpen = document.querySelector(".button-popup-open");
const buttonPopupClose = document.querySelector(".popup__button__close");
const popup = document.querySelector(".popup");
const schedule = document.querySelector(".schedule");
const dynamics = document.querySelector(".dynamics");
const dynamicsText = document.querySelector(".dynamics__text");
const dynamicsPicture = document.querySelector(".dynamics__picture");
const imgRed = dynamicsPicture.querySelector(".dynamics__picture__red");
const imgGrey = dynamicsPicture.querySelector(".dynamics__picture__grey");
const dynamicsButtons = document.querySelector(".dynamics__buttons");
const dynamicsButton1 = document.querySelector(".dynamics__button1");
const dynamicsButton2 = document.querySelector(".dynamics__button2");
const dynamicsButton3 = document.querySelector(".dynamics__button3");

console.log(buttonPopupOpen);

//открытие/закрытие попапа
const openPopup = () => {
  dynamicsButtons.style.display = "none";
  popup.style.display = "block";
};

const closePopup = () => {
  dynamicsButtons.style.display = "flex";
  popup.style.display = "none";
};

buttonPopupOpen.addEventListener("click", (event) => {
  event.preventDefault();
  const buttonPopupPath = buttonPopupOpen.querySelectorAll("path");
  buttonPopupPath.forEach((item) => {
    console.dir(item);
    item.style.fill = "#FCBAD7";
  });
  openPopup();
});

buttonPopupClose.addEventListener("click", (event) => {
  event.preventDefault();
  const buttonPopupPath = buttonPopupOpen.querySelectorAll("path");
  buttonPopupPath.forEach((item) => {
    console.dir(item);
    item.style.fill = "#CE005B";
  });
  closePopup();
});

//переключение слайдов
dynamicsButtons.addEventListener("click", (event) => {
  event.preventDefault();

  const dynamicsButtonsAll =
    dynamicsButtons.querySelectorAll(".dynamics__button");

  dynamicsButtonsAll.forEach((item) => {
    item.style.background = "#F7F7FC";
    item.style.boxShadow = "inset 2px 2px 6px rgba(0, 12, 70, 0.2)";
    item.style.border = "1px solid rgba(0, 12, 70, 0.2)";
    if (event.target === item) {
      item.style.background =
        "linear-gradient(135deg, #CE005B 15.36%, #FF57A1 84.64%)";
    } else {
      return;
    }
  });
});

dynamicsButton1.addEventListener("click", (event) => {
  event.preventDefault();
  dynamicsText.innerText =
    "При оценке первичных и вторичных показателей эффективности, конечных значений и динамики показателей результаты в группах препарата Тиотропиум® были сопоставимы с препаратом Спирива®";

  dynamicsPicture.style.backgroundImage = "url(../images/legends-1.png)";
  imgRed.src = "images/gr_red-1.png";
  imgGrey.src = "images/gr_gray-1.png";
});

dynamicsButton2.addEventListener("click", (event) => {
  event.preventDefault();
  dynamicsText.innerText =
    "При оценке первичных и вторичных показателей эффективности, конечных значений и динамики показателей результаты в группах препарата Тиотропиум® были сопоставимы с препаратом Спирива®";
  dynamicsPicture.style.backgroundImage = "url(../images/legends-2.png)";
  imgRed.src = "images/gr_red-2.png";
  imgGrey.src = "images/gr_gray-2.png";
});

dynamicsButton3.addEventListener("click", (event) => {
  event.preventDefault();
  dynamicsText.innerText =
    "В основной группе на фоне применения исследуемого препарата выявлена положительная динамика (прирост) ФЖЕЛ (л): среднее значение прироста составило 0,21 л, что говорит о сопоставимости групп по вторичному показателю эффективности динамики спирометрических показателей (ФЖЕЛ)";
  dynamicsPicture.style.backgroundImage = "url(../images/legends-3.png)";
  imgRed.src = "images/gr_red-3.png";
  imgGrey.src = "images/gr_gray-3.png";
});
