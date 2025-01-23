const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const carouselDom = document.querySelector(".carousel");
const carouselItemDom = document.querySelector(".carousel .list");
const thumbnailDom = document.querySelector(".carousel .thumbnail");

nextBtn.addEventListener("click", () => {
  showSlider("next");
});

prevBtn.onclick = function () {
  showSlider("prev");
};

let runTimeOut;
let autoRun = setTimeout(() => {
  nextBtn.click();
}, 5000);
function showSlider(type) {
  let itemSlider = document.querySelectorAll(".carousel .list .item");
  let thumbSlider = document.querySelectorAll(".carousel .thumbnail .item");
  if (type == "next") {
    carouselItemDom.appendChild(itemSlider[0]);
    thumbnailDom.appendChild(thumbSlider[0]);
    carouselDom.classList.add("next");
  } else {
    let positionLastItem = itemSlider.length - 1;
    carouselItemDom.prepend(itemSlider[positionLastItem]);
    thumbnailDom.prepend(thumbSlider[positionLastItem]);
    carouselDom.classList.add("prev");
  }

  clearTimeout(runTimeOut);
  runTimeOut = setTimeout(() => {
    carouselDom.classList.remove("next");
    carouselDom.classList.remove("prev");
  }, 2000);

  clearTimeout(autoRun);
  autoRun = setTimeout(() => {
    nextBtn.click();
  }, 5000);
}
