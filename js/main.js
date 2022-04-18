const main = () => {
  const dynamicsText = document.querySelector(".dynamics__text");
  const dynamicsPicture = document.querySelector(".dynamics__picture");
  const imgRed = dynamicsPicture.querySelector(".dynamics__picture__red");
  const imgGrey = dynamicsPicture.querySelector(".dynamics__picture__gray");
  const dynamicsButtons = document.querySelector(".dynamics__buttons");
  const dynamicsButton1 = document.querySelector(".dynamics__button1");
  const dynamicsButton2 = document.querySelector(".dynamics__button2");
  const dynamicsButton3 = document.querySelector(".dynamics__button3");
  const tl = gsap.timeline();

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
      }
    });
  });

  const addGrafic = () => {
    tl.to(".dynamics__picture__gray", {
      duration: 3.3,
      opacity: 1,
      scale: 2,
      ease: "power4.inOut",
    });

    tl.to(".dynamics__picture__red", {
      duration: 3,
      opacity: 1,
      scale: 2,
      ease: "power4.inOut",
    });
  };

  const addTable = () => {
    gsap.from(".dynamics__picture", {
      duration: 4,
      scale: 0.5,
      opacity: 0,
      delay: 0.5,
      ease: "elastic",
    });
  };

  addGrafic();

  dynamicsButton1.addEventListener("click", (event) => {
    event.preventDefault();

    dynamicsText.innerText =
      "При оценке первичных и вторичных показателей эффективности, конечных значений и динамики показателей результаты в группах препарата Тиотропиум® были сопоставимы с препаратом Спирива®";

    dynamicsPicture.style.backgroundImage = "url(../images/legends-1.png)";

    addTable();

    imgRed.src = "/images/gr_red-1.png";
    imgGrey.src = "/images/gr_gray-1.png";

    addGrafic();
    tl.restart();
  });

  dynamicsButton2.addEventListener("click", (event) => {
    event.preventDefault();

    dynamicsText.innerText =
      "При оценке первичных и вторичных показателей эффективности, конечных значений и динамики показателей результаты в группах препарата Тиотропиум® были сопоставимы с препаратом Спирива®";
    dynamicsPicture.style.backgroundImage = "url(../images/legends-2.png)";

    addTable();

    imgRed.src = "/images/gr_red-2.png";
    imgGrey.src = "/images/gr_gray-2.png";

    addGrafic();
    tl.restart();
  });

  dynamicsButton3.addEventListener("click", (event) => {
    event.preventDefault();

    dynamicsText.innerText =
      "В основной группе на фоне применения исследуемого препарата выявлена положительная динамика (прирост) ФЖЕЛ (л): среднее значение прироста составило 0,21 л, что говорит о сопоставимости групп по вторичному показателю эффективности динамики спирометрических показателей (ФЖЕЛ)";
    dynamicsPicture.style.backgroundImage = "url(../images/legends-3.png)";

    addTable();

    imgRed.src = "/images/gr_red-3.png";
    imgGrey.src = "/images/gr_gray-3.png";

    addGrafic();
    tl.restart();
  });
};

main();
